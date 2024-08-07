import { useState } from 'react';
import styled from 'styled-components';

const NumberSelect = ({
	selectedNumber,
	setSelectedNumber,
	error,
	setError,
}) => {
	const diceNumbers = [1, 2, 3, 4, 5, 6];
	const numberSelectError = (number) => {
		setSelectedNumber(number);
		setError('');
	};
	return (
		<NumberSelectWrap>
			<p className="errorMsg">{error}</p>
			<div className="dice_numbers">
				{diceNumbers.map((number) => (
					<SelectNumber
						checkSelected={number == selectedNumber}
						onClick={() => numberSelectError(number)}
						key={number}
						className="select_number">
						{number}
					</SelectNumber>
				))}
			</div>
		</NumberSelectWrap>
	);
};

const NumberSelectWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0 5px;

	.errorMsg {
		font-size: 14px;
		color: #ef5350;
	}
	.dice_numbers {
		display: flex;
		flex-direction: row;
	}
	@media screen and (min-width: 1024px) {
		.errorMsg {
			font-size: 20px;
		}
	}
`;

const SelectNumber = styled.p`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: 26px;
	/* padding: 5px 10px; */
	border: 1px solid;
	width: 40px;
	height: 40px;
	text-align: center;
	background-color: ${(props) => (props.checkSelected ? 'black' : 'white')};
	color: ${(props) => (props.checkSelected ? 'white' : 'black')};

	@media screen and (min-width: 768px) {
		width: 60px;
		height: 60px;
		font-size: 30px;
	}
	@media screen and (min-width: 1024px) {
		width: 80px;
		height: 80px;
		font-size: 40px;
	}
`;

export default NumberSelect;
