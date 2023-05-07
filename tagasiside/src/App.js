import {Link, Route, Routes } from "react-router-dom";
import './App.css';
import Tagasiside from "./pages/Tagasiside";
import TagasisideAndjad from "./pages/TagasisideAndjad";
import Proov from "./pages/Proov";

function App() {
  return (
    <div>
      <Link to ="/">
        <button>Avalehel</button>
      </Link>
      <Link to ="/tagasiside">
        <button>Tagasisidede lehele</button>
      </Link>
      <Link to ="/tagasisideAndjad">
        <button>Tagasisidede lehele</button>
      </Link>
      <Link to ="/proov">
        <button>Proov lehele</button>
      </Link>
    <Routes>
    <Route path="/" exact element={<div>Tere</div>}/>
    <Route path="/tagasiside" exact element={ <Tagasiside /> }/>
    <Route path="/tagasisideAndjad" exact element={ <TagasisideAndjad /> }/>
    <Route path="/proov" exact element={ <Proov /> }/>
    
    </Routes>
    </div>
  );
}

export default App;
