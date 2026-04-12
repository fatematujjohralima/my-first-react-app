import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import Player from './Player'
import Users from './Users'
import CounterApp from './CounterApp'
import BtnToggle from './btnToggle'



function App() {

  function handleClick() {
    alert('I am clicked')
  }

  const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>res.json())
  

  return (
    <>
      <h3>Hello! I am Fatema Tuj Johra Lima</h3>
      <CounterApp></CounterApp>
      <BtnToggle></BtnToggle>
      <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <button onClick={handleClick}>Click me</button>
      <Player></Player>
      <Counter></Counter>
    </>
  )
}

export default App
