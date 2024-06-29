import styled from 'styled-components';

const TotalScore = ({ score }) => {
	return (
		<TotalScoreWrap>
			<p className="score_number">{score}</p>
			<p className="score_text">total score</p>
		</TotalScoreWrap>
	);
};

const TotalScoreWrap = styled.div`
	display: inline-block;
	text-align: center;
	border: 1px solid;
	padding: 10px;
	.score_number {
		font-size: 100px;
		font-weight: 700;
	}
    .score_text{
        font-size: 30px;
        text-transform: capitalize;
    }
`;

export default TotalScore;
