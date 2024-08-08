import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import './BracketPage.css';
import ParticlesBg from "particles-bg";
//import Swal from "sweetalert2";

let config = {
    number: {
        value: 30,
        density: {
            enable: true,
            value_area: 800
        }
    }
};

const BracketPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {items = [], categoryId, categoryName} = location.state || {};
    const [matches, setMatches] = useState(createInitialMatches(items));
    const [currentRound, setCurrentRound] = useState(1);
    const [winner, setWinner] = useState(null);

    function createInitialMatches(items) {
        const sortedItems = [...items].sort((a, b) => b.avg_rating - a.avg_rating);
        console.log('sortedItems: ', sortedItems)

        const numOfByes = sortedItems.length - Math.pow(2, Math.floor(Math.log2(sortedItems.length)));

        const byes = sortedItems.slice(0, numOfByes);
        console.log('byes: ', byes)

        const remainingTeams = sortedItems.slice(numOfByes);

        const matches = [];
        for (let i = 0; i < remainingTeams.length; i += 2) {
            matches.push({
                round: 1,
                match: matches.length + 1,
                competitors: [remainingTeams[i], remainingTeams[i + 1] ? remainingTeams[i + 1] : null],
                winner: null
            });
        }
        return {matches, byes: byes.length ? byes : []};
    }

    function handleMatchWinner(matchIndex, winner) {
        const updatedMatches = [...matches.matches];
        updatedMatches[matchIndex].winner = winner;

        const allCurrentRoundMatchesHaveWinners = updatedMatches
            .filter(m => m.round === currentRound)
            .every(m => m.winner !== null)

        const nextRoundMatches = allCurrentRoundMatchesHaveWinners
            ? createNextRoundMatches(updatedMatches)
            : [];

        setMatches({
            matches: [...updatedMatches, ...nextRoundMatches],
            byes: matches.byes
        });

        if (nextRoundMatches.length === 0 && allCurrentRoundMatchesHaveWinners) {
            setWinner(updatedMatches.find(m => m.round === currentRound && m.match === 1).winner);
            fetch('http://localhost:3000/updatewinner',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({categoryId, winnerId: winner.id})
            }).then(response => response.json())
                .then(data => {
                    console.log('Winner updated successfully: ', data);
                }).catch(error => {
                    console.error('Error updating winner', error);
                });
        }
    }

    function createNextRoundMatches(matches) {
        const nextRoundMatches = [];
        const currentRoundMatches = matches.filter(m => m.round === currentRound)
        let byesInNextRound = []

        for (let i = 0; i < currentRoundMatches.length; i += 2) {
            const competitor1 = currentRoundMatches[i]?.winner
            const competitor2 = currentRoundMatches[i + 1]?.winner;

            if (competitor1 && competitor2) {
                nextRoundMatches.push({
                    round: currentRound + 1,
                    match: nextRoundMatches.length + 1,
                    competitors: [competitor1, competitor2],
                    winner: null
                });
            } else if (competitor1) {
                byesInNextRound.push(competitor1);
            } else if (competitor2) {
                byesInNextRound.push(competitor2);
            }
        }

        const combinedByes = [...(matches.byes || []), ...byesInNextRound]
        console.log('\ncurrentRound: ', currentRound, '\ncombinedByes: ', combinedByes)
        if (currentRound === 1 && (matches.byes || []).length > 0) {
            const byeCompetitors = combinedByes.concat(nextRoundMatches.map(m => m.competitors[0]).filter(Boolean))
            console.log('\nbyeCompetitors: ', byeCompetitors)
            byeCompetitors.forEach((bye, index) => {
                if (index % 2 === 1) {
                    nextRoundMatches.push({
                        round: currentRound + 1,
                        match: nextRoundMatches.length + 1,
                        competitors: [byeCompetitors[index - 1], bye],
                        winner: null
                    });
                }
            })
        }

        setCurrentRound(currentRound + 1)
        return nextRoundMatches;
    }

    return (
        <div className='tc'>
            <ParticlesBg type='square' config={config} bg={true}/>
            <div className='header'>
                <div className='home-button'>
                    <HomeButton/>
                </div>
                <h1 className='title f1 washed-yellow bold'>Bracket Tournament</h1>
            </div>

            <div className='bracket-container'>
                {winner ? (
                    <div>
                        <h2>Winner: {winner.name}</h2>
                        <button onClick={() => navigate('/yourlist', {
                            state: {categoryId, categoryName}
                        })}>Back to Your List
                        </button>
                    </div>
                ) : (
                    matches.matches
                        .filter(m => m.round === currentRound)
                        .map((match, index) => (
                            <div key={index} className='match-container'>
                                <h3>Round {match.round} - Match {match.match}</h3>
                                <div className='competitor-container'>
                                    {match.competitors.map((competitor, i) => (
                                        competitor && (
                                            <button
                                                key={i}
                                                onClick={() => {
                                                    if (competitor.name !== 'BYE') {
                                                        handleMatchWinner(matches.matches.indexOf(match), competitor)
                                                    }
                                                }}
                                                disabled={!!match.winner || !competitor}>
                                                {competitor.name}
                                            </button>
                                        )))}
                                </div>
                                {match.winner && <h4>Winner: {match.winner.name}</h4>}
                            </div>
                        ))
                )}
            </div>
        </div>);
}

export default BracketPage;

