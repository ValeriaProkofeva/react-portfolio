import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'

function App() {

  return (
    <>
      <div className="app">
        <Header></Header>
        <Portfolio></Portfolio>
        <About></About>
      </div>
    </>
  )
}

export default App
