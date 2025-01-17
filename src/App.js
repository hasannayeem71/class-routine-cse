import { useState } from 'react';
import './App.css';
import RAppBar from './Pages/AppBar/RAppBar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  const [batchNumber, setBatchNumber] = useState('')


  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login setBatchNumber={setBatchNumber} />}>
          </Route>
          <Route path="/Home"
            element={
              <>
                <RAppBar batchNumber={batchNumber} setBatchNumber={setBatchNumber} />
                <Home batchNumber={batchNumber} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
