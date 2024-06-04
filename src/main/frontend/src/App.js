import './App.css';
import LandingPage from './pages/HomePage';
import WritePage from './pages/ResumePage';
import {Route, Routes} from "react-router-dom";



function App() {

  return (
      <div style={{backgroundColor: 'rgba(239, 245, 255, 1)', width: '100vw', height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          {/*<LandingPage />*/}
          <Routes>
              <Route path="/" element={ <LandingPage /> }/>
              <Route path="/resume" element={ <WritePage /> }/>
          </Routes>
      </div>
  )
}

export default App;