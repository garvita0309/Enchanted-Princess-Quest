import './App.css';
import Welcome from "./component/Welcome";
import Startclue from './component/Startclue';
import Level2 from './component/Level2'
import Level31 from "./component/Level31";
import Level41 from './component/Level41';
import Error from './component/Error';
import Level32 from './component/Level32';
import Level5 from './component/Level5'
import { Route, Routes } from 'react-router-dom';
import Rules from './component/Rules'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Welcome />}/>
    <Route exact path='/start' element={<Startclue />}/>
    <Route exact path='/level2' element={<Level2 />}/>
    <Route exact path='/level31' element={<Level31 />}/>
    <Route exact path='/level41' element={<Level41 />}/>
    <Route exact path='/error' element={<Error />}/>
    <Route exact path='/level32' element={<Level32 />}/>
    <Route exact path='/level51' element={<Level5 />}/>
    <Route exact path='/rules' element={<Rules />}/>
  </Routes>
    </>
  );
}

export default App;
