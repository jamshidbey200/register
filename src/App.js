import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Branches from "./components/Branches/Branches";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Branches /> } />
      </Route>
    </Routes>
  );
}

export default App;
