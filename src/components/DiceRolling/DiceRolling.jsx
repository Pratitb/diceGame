import { useState } from 'react';
import styled from 'styled-components';

// jsx
const DiceRolling = ({ currentDice, shuffleDice, resetScore }) => {
	// html return
	return (
		<DiceRoll>
			<img
				className="dice_piece"
				src={`dice_${currentDice}.png`}
				alt="Black Dice with 1 dot"
				onClick={shuffleDice}
			/>
			<p className="dice_label">click on the dice to roll</p>
			<button className="reset_score" onClick={resetScore}>
				reset score
			</button>
			{/* <button className="show_rules">show rules</button> */}
		</DiceRoll>
	);
};

// css
const DiceRoll = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 80px 0 0;
	gap: 20px 0;
	.dice_piece {
		max-width: 150px;
		cursor: pointer;
	}
	.dice_label {
		font-size: 20px;
		text-transform: capitalize;
	}
	.reset_score,
	.show_rules {
		font-size: 20px;
		border-radius: 4px;
		width: 100%;
		max-width: 150px;
		height: 50px;
		border: none;
		background-color: #43a047;
		color: aliceblue;
	}

	@media screen and (min-width: 768px){
		.dice_piece{
			max-width: 200px;
		}
	}
	@media screen and (min-width: 1024px){
		.dice_piece{
			max-width: 100%;
		}
		.dice_label{
			font-size: 24px;
		}
	}
`;

export default DiceRolling;
