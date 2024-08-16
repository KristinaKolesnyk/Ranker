import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeButton from '../../components/Navigation/HomeButton';
import './BracketPage.css';
import ParticlesBg from 'particles-bg';

const config = {
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
    const [matches, setMatches] = useState([]);
    const [currentRound, setCurrentRound] = useState(1);
    const [winner, setWinner] = useState(null);

    // Создание начальных матчей
    const createInitialMatches = useCallback((competitors) => {
        const matches = [];
        for (let i = 0; i < competitors.length; i += 2) {
            if (i + 1 < competitors.length) {
                matches.push({
                    round: 1,
                    match: matches.length + 1,
                    competitors: [competitors[i], competitors[i + 1]],
                    winner: null,
                });
            } else {
                // Один участник получает бай
                matches.push({
                    round: 1,
                    match: matches.length + 1,
                    competitors: [competitors[i]],
                    winner: competitors[i],
                });
            }
        }
        return matches;
    }, []);

    // Создание матчей следующего раунда
    const createNextRoundMatches = useCallback((matches) => {
        const nextRoundMatches = [];
        const winners = matches
            .filter(m => m.winner !== null)
            .map(m => m.winner);

        for (let i = 0; i < winners.length; i += 2) {
            if (i + 1 < winners.length) {
                nextRoundMatches.push({
                    round: currentRound + 1,
                    match: nextRoundMatches.length + 1,
                    competitors: [winners[i], winners[i + 1]],
                    winner: null,
                });
            } else {
                // Один участник получает бай
                nextRoundMatches.push({
                    round: currentRound + 1,
                    match: nextRoundMatches.length + 1,
                    competitors: [winners[i]],
                    winner: winners[i],
                });
            }
        }

        return nextRoundMatches;
    }, [currentRound]);

    // Обработка победителя матча
    const handleMatchWinner = useCallback((matchIndex, winner) => {
        const updatedMatches = [...matches];
        updatedMatches[matchIndex].winner = winner;

        const currentRoundMatches = updatedMatches.filter(m => m.round === currentRound);
        const allCurrentRoundMatchesHaveWinners = currentRoundMatches.every(m => m.winner !== null);

        if (allCurrentRoundMatchesHaveWinners) {
            const nextRoundMatches = createNextRoundMatches(updatedMatches);
            if (nextRoundMatches.length === 0) {
                // Финалист найден, установка победителя
                const finalWinner = updatedMatches.find(m => m.round === currentRound && m.match === 1)?.winner;
                setWinner(finalWinner);

                if (finalWinner) {
                    fetch('http://localhost:3000/updatewinner', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ categoryId, winnerId: finalWinner.id }),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Winner updated successfully: ', data);
                    })
                    .catch(error => {
                        console.error('Error updating winner:', error);
                    });
                }
            } else {
                setMatches(updatedMatches.concat(nextRoundMatches));
                setCurrentRound(currentRound + 1);
            }
        }
    }, [matches, currentRound, createNextRoundMatches, categoryId]);

    useEffect(() => {
        if (items.length) {
            const sortedItems = [...items].sort((a, b) => b.avg_rating - a.avg_rating);
            setMatches(createInitialMatches(sortedItems));
        }
    }, [items, createInitialMatches]);

    // Функция для рендеринга одного матча
    const renderMatch = (match, index) => (
        <div key={index} className="match-container">
            <h4>Match {match.match}</h4>
            <div className="competitor-container">
                {match.competitors.map((competitor, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            if (!match.winner) {
                                const matchIndex = matches.indexOf(match);
                                handleMatchWinner(matchIndex, competitor);
                            }
                        }}
                        disabled={!!match.winner}
                    >
                        {competitor.name}
                    </button>
                ))}
            </div>
            {match.winner && <h5>Winner: {match.winner.name}</h5>}
        </div>
    );

    // Функция для рендеринга всех раундов
    const renderBracket = () => {
        let roundMatches = matches.filter(m => m.round === 1);
        const rounds = [];

        while (roundMatches.length > 0) {
            rounds.push(
                <div key={roundMatches[0].round} className="round">
                    <h3>Round {roundMatches[0].round}</h3>
                    {roundMatches.map((match, index) => renderMatch(match, index))}
                </div>
            );

            // Переход к следующему раунду
            roundMatches = matches.filter(m => m.round === roundMatches[0].round + 1);
        }

        return rounds;
    };

    return (
        <div className="tc">
            <ParticlesBg type="square" config={config} bg={true} />
            <div className="header">
                <div className="home-button">
                    <HomeButton />
                </div>
                <h1 className="title f1 washed-yellow bold">Bracket Tournament</h1>
            </div>

            <div className="bracket-container">
                {winner ? (
                    <div>
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
                    renderBracket()
                )}
            </div>
        </div>
    );
};

export default BracketPage;
