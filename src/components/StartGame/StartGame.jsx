import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <img className='start_game_dices' src="start-game-dices.png" alt="Multiple big dices" />
        <div className="start_btn">
            <p className="game_name">Dice prediction</p>
            <button className='start_game_btn' onClick={toggle}>Play now</button>
        </div>
    </Container>
  )
}

const Container = styled.div`
	width: 100%;
	max-width: 1180px;
	margin: 0 auto;
	padding: 0 20px;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	.game_name {
		font-size: 50px;
		font-weight: 700;
        text-transform: capitalize;
	}
	.start_game_dices {
		max-width: 500px;
	}
	.start_btn{
        display: flex;
        flex-direction: column;
        gap: 30px 0;
    } .start_game_btn {
		font-size: 24px;
		width: 100%;
		max-width: 200px;
		height: 60px;
	}
`;

const StartButton = styled.button`
    
`

export default StartGame