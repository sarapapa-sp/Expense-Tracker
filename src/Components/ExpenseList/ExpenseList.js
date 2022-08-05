import "./expenselist.css";
import ExpenseCard from "./Card/ExpenseCard";

function ExpenseList(props) {
    const list = [
        {
            title:"Prchase",
            logo:"sefaw",
            date:Date.now(),
            price:122
        },
        {
            title:"Prchase",
            logo:"sefaw",
            date:Date.now(),
            price:122
        },
    ]
    return (
        <div>
            {list.length ? (
                list.map(item => (
                    <ExpenseCard item={item} />
                ))
            ) : null}
        </div>
    );
}

export default ExpenseList;