import "./home.css";
import TopFold from "../../Components/TopFold/TopFold";
import ExpenseList from "../../Components/ExpenseList/ExpenseList";

function Home(props) {
    return (
        <div className="home">
            <TopFold />
            <ExpenseList />

        </div>
    );
}

export default Home;