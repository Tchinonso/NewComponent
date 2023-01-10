import React from 'react'
import './App.scss'
import { BrowserRouter as Routes, Route, Switch} from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Layout/Home/Home'
import About from './Layout/About/About'
import Contact from './Layout/Contact/Contact'

const App = () => {
  return (
    <>
      <Routes>
      
          <Layout />
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Routes>
      {/* <Routes >
        <Route path='/' component={ <Layout /> }>
          <Route path='/about' component={ <About /> } />
          <Route index component={ <Home /> } />
          
        </Route>

      </Routes> */}
    </>
  )
}

export default App
