import "./addexpense.css";
import TopFold from "../../Components/TopFold/TopFold";
import AddForm from "../../Components/AddForm/AddForm";

function AddExpense(props) {
    return (
        <div className="add-expense">
            <TopFold />
            <AddForm />
        </div>
    );
}

export default AddExpense;