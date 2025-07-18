import Header from './component/header/header'
import Home from './pages/home/home'
import Experience from './pages/experience/experience'
import Contact from './pages/contact/contact'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/experience" element={<Experience></Experience>}> </Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
