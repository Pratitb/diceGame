import { useState } from "react"
import StartGame from "./components/StartGame/StartGame"
import GamePlay from "./components/GamePlay/GamePlay"

function App() {

  const [isGameStarted, setGameStarted] = useState(false)

  const toggleGame = () => {
    setGameStarted(prev => !prev)
  }

  return (
    <>
    {/* to run js here, we use these {} braces */}
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGame}/>}
    </>
  )
}

export default App
