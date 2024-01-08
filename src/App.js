import "./App.css";
import Home from "./components/Home";
import RegisterModal from "./components/RegisterModal";

export default function App() {
  return (
    <div>
      <RegisterModal />
      <Home />
    </div>
  );
}
