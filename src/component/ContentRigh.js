import React from 'react'
import "../css/ContentRigh.css"
import Applications from "./Applications"
function ContentRigh() {
    return (
        <div className="RightContent">
            <i class="far fa-arrow-alt-circle-right"></i>
            <div className="Detail">
                <h5>Hello Raghav Agrawal</h5>
                <h5>You have 8 New Application Today!</h5>
                <img src="https://www.pinclipart.com/picdir/big/256-2561403_bird-clipart-mail-png-download.png" />
            </div>
            <div className="Applications">
                <Applications></Applications>
            </div>
        </div>
    )
}

export default ContentRigh
