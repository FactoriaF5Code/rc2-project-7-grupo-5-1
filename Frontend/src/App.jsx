import { useState } from 'react'
import Pagina2 from "./Pagina2/Pagina2.jsx"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Header from './Header/Header.jsx'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Pagina2 />
    </>
  )
}

const App = () => (
  <Router>
    <Route path="/pagina2" component={Pagina2} />
  </Router>
);

export default App
