
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Landing,
  Register,
  Error,
  ProtectedRoute
} from './pages';
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats
} from './pages/dashboard'

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
        <Route path='/' element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
          <Route  path='add-job' element={<AddJob />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='profile' element={<Profile />} />
          <Route index  element={<Stats />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
