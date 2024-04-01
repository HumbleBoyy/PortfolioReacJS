import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import './App.scss'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import Dashboard from './Components/Dashboard/Dashboard'

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/"  element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
