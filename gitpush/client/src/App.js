
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Landing,
  Register,
  Error,
  Dashboard
} from './pages';

/*const Button = styled.button`
  background : red;
  color:white;
  font-size:1rem;
`
const ButtonSecond = styled.button`         ***Button and ButtonSecond have diff class names 
 background : blue;
  color:white;
  font-size:1rem;
` */

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
