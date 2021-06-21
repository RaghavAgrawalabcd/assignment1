import React from 'react'
import "../css/PercentageCard.css"
function PercentageCard() {
    return (
        <div className="Border">
            <div className="Percentage">
            <div className="PercentageTop">
                <div className="Left"><h5>Total Application</h5></div>
                <div className="Right"><i class="fas fa-ellipsis-h"></i></div>     
            </div>
            <div className="PercentageBottom">
                <div className="NonCircle">
                    <h3>7956</h3>
                    <h6>-3.59%</h6>
                </div>
                <div className="Circle">
                    <span><h5>+70%</h5></span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PercentageCard
