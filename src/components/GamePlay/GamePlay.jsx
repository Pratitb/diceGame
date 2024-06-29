import { useState } from 'react';
import DiceRolling from '../DiceRolling/DiceRolling';
import NumberSelect from '../NumberSelect/NumberSelect';
import TotalScore from '../TotalScore/TotalScore';
import styled from 'styled-components';

const GamePlay = () => {
	// state hooks
	const [selectedNumber, setSelectedNumber] = useState();
	const [currentDice, setCurrentDice] = useState(1);
	const [score, setScore] = useState(0);
    const [error, setError] = useState('')

	// functions
	const generateDiceNumber = (min, max) => {
		console.log(Math.floor(Math.random() * (max - min) + min));
		return Math.floor(Math.random() * (max - min) + min);
	};
	const shuffleDice = () => {
        if(!selectedNumber){
            setError('Please select a number')
            return;
        }
        else{
            
        }
		const randomNumber = generateDiceNumber(1, 7);
		setCurrentDice(() => randomNumber);
		// check selected number and random number
		if (selectedNumber == randomNumber) {
			setScore((prev) => prev + randomNumber);
		} else {
			setScore((prev) => prev - 2);
		}
        setSelectedNumber(undefined)
	};
    const resetScore = () => {
        setScore(0)
    }

	return (
		<>
			<GameOptions className="container">
				<TotalScore score={score} />
				<NumberSelect
					selectedNumber={selectedNumber}
					setSelectedNumber={setSelectedNumber}
					error={error}
					setError={setError}
				/>
			</GameOptions>
			<DiceGame className="container">
				<DiceRolling
					resetScore={resetScore}
					currentDice={currentDice}
					shuffleDice={shuffleDice}
				/>
			</DiceGame>
		</>
	);
};

const GameOptions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px 0;
	gap: 20px 0;

	@media screen and (min-width: 768px){
		flex-direction: row;
	}
`;

const DiceGame = styled.div`
	text-align: center;
`;

export default GamePlay;
