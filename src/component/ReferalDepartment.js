import React from 'react'
import "../css/ReferalDepartment.css"
function ReferalDepartment() {
    return (
        <div className="Top">
            <div className="Left1">
                <div className="Sub1">
                    <div className="Left1Heading">
                        <h4>Referals and Campaign Stats</h4>
                    </div>
                    <div className="Right1Heading">
                            <h4 style={{color: "#FE5260"}}>40 Campaign sent in total</h4>
                            <h4>4 Campaign sent in last month</h4>
                    </div>
                </div>
                <div className="Sub2">
                    <div className="SubCard">
                        <h5>User Reached</h5>
                        <h6>+3.9%</h6>
                        <h3>7956</h3>
                    </div>
                    <div className="SubCard">
                        <h5>Referals</h5>
                        <h6>+3.9%</h6>
                        <h3>7956</h3>
                    </div>
                    <div className="SubCard">
                        <h5>Shares</h5>
                        <h6>+3.9%</h6>
                        <h3>7956</h3>
                    </div>
                    <div className="SubCard">
                        <h5>Applications</h5>
                        <h6>+3.9%</h6>
                        <h3>7956</h3>
                    </div>
                </div>
                <div className="Sub3">
                    <div className="SubButton1"><h5>Start a new Campaign Now</h5></div>
                    <div className="SubButton2"><h5>Pause all running Campaign</h5></div>
                </div>
            </div>
            <div className="Right1">
                <div className="Right1Top">
                    <h5>Open position by department</h5>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div className="Right1Bottom">
                    <h4>Positions</h4>
                </div>
            </div>
        </div>
    )
}

export default ReferalDepartment
