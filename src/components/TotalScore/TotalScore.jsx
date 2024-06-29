import styled from 'styled-components';

const TotalScore = ({ score }) => {
	return (
		<TotalScoreWrap>
			<p className="score_text">total score</p>
			<p className="score_number">{score}</p>
		</TotalScoreWrap>
	);
};

const TotalScoreWrap = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	gap: 0 20px;
	border: 1px solid;
	padding: 10px;
	.score_number {
		font-size: 50px;
		line-height: 60px;
		font-weight: 700;
	}
	.score_text {
		font-size: 24px;
		text-transform: capitalize;
	}

	@media screen and (min-width: 1024px) {
		padding: 20px;
		.score_number {
			font-size: 70px;
		}
		.score_text {
			font-size: 30px;
		}
	}
`;

export default TotalScore;
