import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import './BracketPage.css';
import ParticlesBg from "particles-bg";
import Swal from "sweetalert2";

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
    const {items = []} = location.state || {};
    const [matches, setMatches] = useState(createInitialMatches(items));
    const [currentRound, setCurrentRound] = useState(1);
    const [winner, setWinner] = useState(null);

    function createInitialMatches(items) {
        if (items.length % 2 !== 0) {
            items.push({name: 'BYE'});
        }
        const shuffledItems = [...items].sort(() => Math.random() - 0.5);
        const matches = [];
        for (let i = 0; i < shuffledItems.length; i += 2) {
            matches.push({
                round: 1,
                match: matches.length + 1,
                competitors: [shuffledItems[i], shuffledItems[i + 1] || {name: 'BYE'}],
                winner: null
            });
        }
        return matches;
    }

    function handleMatchWinner(matchIndex, winner) {
        const updatedMatches = [...matches];
        updatedMatches[matchIndex].winner = winner;

        const allCurrentRoundMatchesHaveWinners = updatedMatches
            .filter(m => m.round === currentRound)
            .every(m => m.winner !== null)

        const nextRoundMatches = allCurrentRoundMatchesHaveWinners
            ? createNextRoundMatches(updatedMatches)
            : [];

        setMatches([...updatedMatches, ...nextRoundMatches]);

        if (nextRoundMatches.length === 0 && allCurrentRoundMatchesHaveWinners) {
            setWinner(updatedMatches.find(m => m.round === currentRound && m.match === 1).winner);
        }
    }

    function createNextRoundMatches(matches) {
        const nextRoundMatches = [];
        const currentRoundMatches = matches.filter(m => m.round === currentRound)

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
            }
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
                        <button onClick={() => navigate('/yourlist')}>Back to Your List</button>
                    </div>
                ) : (
                    matches
                        .filter(m => m.round === currentRound)
                        .map((match, index) => (
                            <div key={index} className='match-container'>
                                <h3>Round {match.round} - Match {match.match}</h3>
                                <div className='competitor-container'>
                                    {match.competitors.map((competitor, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                if (competitor.name !== 'BYE') {
                                                    handleMatchWinner(matches.indexOf(match), competitor)
                                                } else {
                                                    Swal.fire({
                                                        icon: 'info',
                                                        title: 'Automatic Win',
                                                        text: `Match ${match.competitors[0].name} has been won by default!`
                                                    })
                                                    handleMatchWinner(matches.indexOf(match), match.competitors[0])
                                                }
                                            }}
                                            disabled={!!match.winner || competitor.name === 'BYE'}>
                                            {competitor.name}
                                        </button>
                                    ))}
                                </div>
                                {match.winner && <h4>Winner: {match.winner.name}</h4>}
                            </div>
                        ))
                )}
            </div>
        </div>);
}

export default BracketPage;

