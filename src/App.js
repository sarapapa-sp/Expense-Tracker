
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AddExpense from "./Pages/Addexpense/AddExpense";

function App() {
  return (
      <Router>

        <Header />
          <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/add-expense" element={<AddExpense />}></Route>
          </Routes>

        <Footer />

      </Router>
  );
}

export default App;
