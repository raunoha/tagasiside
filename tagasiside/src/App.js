import {Link, Route, Routes } from "react-router-dom";
import './App.css';
import Tagasiside from "./pages/Tagasiside";
import TagasisideAndjad from "./pages/TagasisideAndjad";

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
    <Routes>
    <Route path="/" exact element={<div>Tere</div>}/>
    <Route path="/tagasiside" exact element={ <Tagasiside /> }/>
    <Route path="/tagasisideAndjad" exact element={ <TagasisideAndjad /> }/>
    </Routes>
    </div>
  );
}

export default App;
