import './App.css'
import Counter from './Counter'
import Player from './Player'

function App() {

  function handleClick() {
    alert('I am clicked')
  }
  

  return (
    <>
      <h3>Hello! I am Fatema Tuj Johra Lima</h3>
      <button onClick={handleClick}>Click me</button>
      <Player></Player>
      <Counter></Counter>
      
      </>
  )
}

export default App
