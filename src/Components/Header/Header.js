import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";



function Header(props) {
    return (
        <div className="header">
            <div className="header-container">
        <div className="header-logo">
            XpenSer
            <FontAwesomeIcon icon={faCreditCard} />
        </div>
                <div className="header-button">
                    <a href="https://github.com/sarapapa-sp/Expense-Tracker" target="_blank" rel="noopener noreferrer">
                    <i className="devicon-github-original colored">Github</i>

                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;