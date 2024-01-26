import { useState } from 'react'
import Header from "./Header/Header"
import './App.css'
import MyModal from './Modal/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <MyModal />
    </>
  )
}

export default App
