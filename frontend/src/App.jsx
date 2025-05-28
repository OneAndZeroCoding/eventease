import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Register_User from './pages/Register_User';

function App(){
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register-user' element={<Register_User />} />
      </Routes>
    </Router>

  )
}

export default App;