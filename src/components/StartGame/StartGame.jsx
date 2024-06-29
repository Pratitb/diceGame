import styled from 'styled-components';

const StartGame = ({ toggle }) => {
	return (
		<Container>
			<img
				className="start_game_dices"
				src="start-game-dices.png"
				alt="Multiple big dices"
			/>
			<div className="start_btn">
				<p className="game_name">Dice prediction</p>
				<button className="start_game_btn" onClick={toggle}>
					Play now
				</button>
			</div>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	max-width: 1180px;
	margin: 0 auto;
	padding: 0 20px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	.game_name {
		font-size: 35px;
		font-weight: 700;
		text-transform: capitalize;
	}
	.start_game_dices {
		max-width: 100%;
	}
	.start_btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px 0;
	}
	.start_game_btn {
		font-size: 24px;
		width: 100%;
		max-width: 200px;
		height: 60px;
	}
	@media screen and (min-width: 768px) {
		flex-direction: row;
		.start_game_dices {
			max-width: 300px;
		}
		.game_name{
			font-size: 45px;
		}
	}
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		.start_game_dices {
			max-width: 400px;
		}
		.game_name{
			font-size: 55px;
		}
		.start_game_btn{
			font-size: 30px;
			max-width: 250px;
			height: 70px;
		}
	}
	@media screen and (min-width: 1440px) {
		flex-direction: row;
		.start_game_dices {
			max-width: 500px;
		}
		.game_name{
			font-size: 75px;
		}
		.start_game_btn{
			font-size: 35px;
			max-width: 300px;
			height: 80px;
		}
	}
`;

export default StartGame;
