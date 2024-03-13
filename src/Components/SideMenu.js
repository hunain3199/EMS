import { useState } from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* <button onClick={toggleMenu} className="btn btn-sm">Toggle Menu</button> */}
            {/* Side Menu */}
            <nav
                id="sidebar"
                className={`col-md-3 col-lg-2 d-md-block bg-light sidebar ${isMenuOpen ? 'show' : 'd-none'}`}
                hidden={true}
            >
                {/* Add your sidebar content here */}
                <div className="position-fixed sideBarTop">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link text-success active" to="/">
                            <i className="bi bi-shop-window mx-3"></i> Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success active" to="/employee">
                                <i className="bi bi-people-fill mx-3"></i> Employee
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success" to="/employee">
                                <i className="bi bi-calendar-check mx-3"></i> Attendance
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link text-success " to="/chat">
                                <i className="bi bi-person-fill mx-3"></i> Chat
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link text-success " to="/employee">
                                <i className="bi bi-person-fill mx-3"></i> User
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success " to="/leave">
                                <i className="bi bi-person-fill mx-3"></i> Leave
                            </Link>
                        </li>
                        {/* Add more sidebar items as needed */}
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default SideMenu