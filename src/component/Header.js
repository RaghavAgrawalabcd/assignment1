import React from 'react'
import "../css/Header.css"
import Raghav from "../Raghav.jpg"
function Header() {
    return (
        <div className="Header">
            <div className="Dashboard">
                <div className="Title">Dashboard</div>
                <div className="Title">Monday, <span>20 June 2021</span></div>
            </div>
            <div className="Right">
                <div className="RightTop">
                    <i class="fas fa-bell"></i>
                    <h4>Raghav Agrawal</h4>
                    <img src={Raghav} />
                </div>
                <div className="RightBottom">
                    <button>+ Add</button>
                    <i class="fas fa-search"></i>
                    <h4>Search Application</h4>
                </div>
            </div>
        </div>
    )
}

export default Header
