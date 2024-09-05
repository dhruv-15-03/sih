import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Components/HomePage';
import Blood from './Components/Blood';
import Glucose from './Components/Glucose';
import LoneCustomer from './Components/LoneCustomer';

function App() {
  return (
    <div className="">
          <Routes>
              <Route path='/*' element={<HomePage/>}></Route>
              <Route path='/blood' element={<Blood/>}></Route>
              <Route path='/glucose' element={<Glucose/>}></Route>
              <Route path='/user' element={<LoneCustomer/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
