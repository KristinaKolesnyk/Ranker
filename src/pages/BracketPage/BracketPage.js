import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeButton from '../../components/Navigation/HomeButton';
import './BracketPage.css';
import Scroll from '../../components/Scroll';
import ParticlesBg from 'particles-bg';

let config = {
    number: {
        value: 30,
        density: {
            enable: true,
            value_area: 800,
        },
    },
};

const BracketPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { items = [], categoryId, categoryName } = location.state || {};
    const [matches, setMatches] = useState(createInitialMatches(items));
    const [currentRound, setCurrentRound] = useState(1);
    const [winner, setWinner] = useState(null);

    const createNextRoundMatches = useCallback((matches) => {
        const nextRoundMatches = [];
        const currentRoundMatches = matches.filter((m) => m.round === currentRound);

        let byesInNextRound = [];
        let playerInNextRound = null;

        for (let i = 0; i < currentRoundMatches.length; i += 2) {
            const competitor1 = currentRoundMatches[i]?.winner;
            const competitor2 = currentRoundMatches[i + 1]?.winner;

            if (competitor1 && competitor2) {
                nextRoundMatches.push({
                    round: currentRound + 1,
                    match: nextRoundMatches.length + 1,
                    competitors: [competitor1, competitor2],
                    winner: null,
                });
            } else if (competitor1) {
                playerInNextRound = competitor1;
            } else if (competitor2) {
                playerInNextRound = competitor2;
            }
        }

        if (playerInNextRound && nextRoundMatches.length === 0) {
            setWinner(playerInNextRound);
            return [];
        }

        if (byesInNextRound.length > 0) {
            for (let i = 0; i < byesInNextRound.length; i += 2) {
                nextRoundMatches.push({
                    round: currentRound + 1,
                    match: nextRoundMatches.length + 1,
                    competitors: [byesInNextRound[i], byesInNextRound[i + 1] || null],
                    winner: null,
                });
            }
        }

        setCurrentRound(currentRound + 1);
        return nextRoundMatches;
    }, [currentRound]);

    const handleMatchWinner = useCallback((matchIndex, winner) => {
        const updatedMatches = [...matches.matches];
        updatedMatches[matchIndex].winner = winner;

        const allCurrentRoundMatchesHaveWinners = updatedMatches
            .filter((m) => m.round === currentRound)
            .every((m) => m.winner !== null);

        const nextRoundMatches = allCurrentRoundMatchesHaveWinners
            ? createNextRoundMatches(updatedMatches)
            : [];

        setMatches({
            matches: [...updatedMatches, ...nextRoundMatches],
            byes: matches.byes,
        });

        if (nextRoundMatches.length === 0 && allCurrentRoundMatchesHaveWinners) {
            const finalWinner = updatedMatches.find((m) => m.round === currentRound && m.match === 1).winner;
            setWinner(finalWinner);
            fetch('http://localhost:3000/updatewinner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ categoryId, winnerId: finalWinner.id }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Winner updated successfully: ', data);
                })
                .catch((error) => {
                    console.error('Error updating winner', error);
                });
        }
    }, [matches, currentRound, categoryId, createNextRoundMatches]);

    useEffect(() => {
        if (matches.matches.length > 0) {
            const lastMatchIndex = matches.matches.findIndex(m => m.round === currentRound && m.match === 1);
            const lastMatch = matches.matches[lastMatchIndex];

            if (lastMatch && lastMatch.competitors.some(c => c && c.name === 'BYE')) {
                const itemWinner = lastMatch.competitors.find(c => c && c.name !== 'BYE');
                if (itemWinner) {
                    handleMatchWinner(lastMatchIndex, itemWinner);
                }
            }
        }
    }, [matches, currentRound, handleMatchWinner]);

    function createInitialMatches(items) {
        const sortedItems = [...items].sort((a, b) => b.avg_rating - a.avg_rating);

        const powerOfTwo = Math.pow(2, Math.ceil(Math.log2(sortedItems.length)));
        const numOfByes = powerOfTwo - sortedItems.length;
        const byes = sortedItems.slice(0, numOfByes);

        const remainingTeams = sortedItems.slice(numOfByes);

        const matches = [];
        for (let i = 0; i < remainingTeams.length; i += 2) {
            matches.push({
                round: 1,
                match: matches.length + 1,
                competitors: [remainingTeams[i], remainingTeams[i + 1] || null],
                winner: null,
            });
        }

        if (numOfByes > 0) {
            const byeMatches = [];
            for (let i = 0; i < numOfByes; i += 2) {
                byeMatches.push({
                    round: 1,
                    match: matches.length + 1 + i / 2,
                    competitors: [byes[i], byes[i + 1] || null],
                    winner: null,
                });
            }
            return { matches: [...matches, ...byeMatches], byes: [] };
        }

        return { matches, byes: [] };
    }

    return (
        <div className="tc">
            <ParticlesBg type="square" config={config} bg={true} />
            <div className="header">
                <div className="home-button">
                    <HomeButton />
                </div>
                <h1 className="title">Bracket Tournament</h1>
            </div>

            <Scroll>
                <div className="bracket-container">
                    {winner ? (
                        <div className="winner-section">
                            <h2>Winner: {winner.name}</h2>
                            <button
                                onClick={() =>
                                    navigate('/yourlist', {
                                        state: { categoryId, categoryName },
                                    })
                                }
                            >
                                Back to Your List
                            </button>
                        </div>
                    ) : (
                        matches.matches
                            .filter((m) => m.round === currentRound)
                            .map((match, index) => (
                                <div key={index} className="match-container">
                                    <div className="competitor-container">
                                        {match.competitors.map((competitor, i) =>
                                            competitor ? (
                                                <button
                                                    key={i}
                                                    onClick={() => {
                                                        if (competitor.name !== 'BYE') {
                                                            handleMatchWinner(
                                                                matches.matches.indexOf(match),
                                                                competitor
                                                            );
                                                        }
                                                    }}
                                                    disabled={!!match.winner}
                                                >
                                                    {competitor.name}
                                                </button>
                                            ) : (
                                                <span key={i} className="bye">BYE</span>
                                            )
                                        )}
                                    </div>
                                    {match.winner && <h4>Winner: {match.winner.name}</h4>}
                                </div>
                            ))
                    )}
                </div>
            </Scroll>
        </div>
    );
};

export default BracketPage;
