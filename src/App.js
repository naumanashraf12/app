import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Main from "./Main.js";
import Footer from "./Footer";

function App() {
  return (
    <div className="App min-vh-100">
      <Nav />
      <Main />
      <div className="d-none d-md-flex">
        <Footer />
      </div>
    </div>
  );
}

export default App;
