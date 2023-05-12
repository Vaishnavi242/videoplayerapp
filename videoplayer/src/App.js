import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './configs/routes/routes_config';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/"> </Link>
        <Link to="/home"> Home </Link>
        <Routes>
          {
            routes && routes.map((item) => {
              return <Route path={item.path} element={item.component} />
            })
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
