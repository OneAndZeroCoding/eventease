import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Register_User from './pages/Register_User';

function App(){
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register-user' element={<Register_User />} />
      </Routes>

  )
}

export default App;