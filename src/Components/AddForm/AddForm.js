import "./addform.css";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {categorylist} from "../../Constants/addExpense";

function AddForm(props) {
    const categories =categorylist
    const [openCategory , setOpenCategory] = useState(false)
    const [data,setData] = useState()
    const [title,setTitle] = useState("")
    const [amount,setAmount] =useState("")
    const [category,setCategory]=useState("")


    const handleTitle = (e) => {
        setTitle(e.target.value)
        console.log(title)
    }

    const handleAmount = (e) => {
        let value = parseFloat(e.target.value)
        if(isNaN(value)){
            setAmount("")
            return
        }
        setAmount(value)
        console.log(amount)
    }
    const handleCategoryOpen = () => {
        setOpenCategory(!openCategory)
    }
    return (
        <div className="add-form">
            <div className="form-item">
                <label>Title</label>
                <input
                    type="text"
                    placeholder="Give a name to your expense"
                    name="title"
                    value={title}
                    onChange={handleTitle}
                />
            </div>
            <div className="form-item">
                <label>Amount</label>
                <input
                    className="amount-input"
                    type="text"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={handleAmount}
                />
            </div>

            <div className="category-container">
                    <div className="category">
                        <div className="dropdown">
                            <label>Category</label>
                            <FontAwesomeIcon
                                className="category-icon"
                                icon={faChevronDown}
                                onClick={handleCategoryOpen}
                            />
                        </div>
                        {openCategory &&
                            <div className="dropdown-container">

                                {
                                    categories.map(item => (
                                        <div className="dropdown-item">
                                            <label>{item.title}</label>
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
            </div>

        </div>
    );
}

export default AddForm;