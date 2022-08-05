import "./topfold.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faAngleLeft, faSearch, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link} from "react-router-dom";

function TopFold(props) {

    const [query , setQuery] = useState("")

    const handleQuery = (e) => {
        setQuery(e.target.value)
        console.log(query)
    }
    return (
        <div className="topfold">

            {window.location.pathname === "/" ?
                <div className="home-top-fold">
                    <div className="search-bar">
                        <FontAwesomeIcon icon={faSearch} />
                        <input
                            type="text"
                            placeholder="Search for Expenses"
                            value={query}
                            onChange={handleQuery} />
                    </div>
                    <Link to="/add-expense">

                    <div className="add-button">
                        <FontAwesomeIcon icon={faAdd} />
                        <label>Add</label>

                    </div>
                    </Link>
                </div>
                :
                <div className="add-top-fold">
                    <Link to="/">

                        <div className="add-top-fold-button">
                            <FontAwesomeIcon className="icon" icon={faAngleLeft} />
                            <label> Back </label>

                        </div>
                    </Link>
                    <Link to="/">

                        <div className="add-top-fold-button">
                            <FontAwesomeIcon className="icon" icon={faXmark} />
                            <label> Cancel </label>

                        </div>
                    </Link>

                </div>

            }
        </div>
    );
}

export default TopFold;