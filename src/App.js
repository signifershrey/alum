import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Colleges from "./components/Colleges/Colleges";
import Navbar from "./components/Navbar/Navbar";
import VerticalCarousel from "./components/ EventsAndNews/Events";
import LoginForm from "./components/Login/LoginForm";
import Footer from "./components/Footer/Footer";
import { Divider } from "@material-ui/core";
import Alumni from "./components/Alumni/Alumni";
// import Moving from "./components/moving";

const Others = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Divider />
      <Colleges />
      <VerticalCarousel />
      {/* <Moving/> */}
      <LoginForm />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Others} />
        <Route exact path="/alumni" component={Alumni} />
      </Router>
    </div>
  );
}

export default App;
