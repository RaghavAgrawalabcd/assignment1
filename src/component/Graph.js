import React from 'react'
import "../css/Graph.css"
import StockGraph from "../StockGraph.png"
function Graph() {
    return (
        <div className="Graph">
            <div className="GraphLeft">
                <div className="Headline">
                    <h5>Applications Received</h5>
                <h6>This Year</h6>
                <h6>This Week</h6>
                <h6>Today</h6>
                <span>
                    <i class="fas fa-folder"></i>
                    <h6>Download Report</h6>
                </span>
                <i class="fas fa-ellipsis-v"></i>
                </div>
                <img src={StockGraph}/>
            </div>
            <div className="GraphRight">
                <h4>Total Applicanions</h4>
                <div className="List">
                    <ul>
                        <li style={{color: "#AACEED"}}>
                            <h5>HTML</h5>
                            <div className="Outer">
                                <div style={{ color: "50%",background: "#AACEED"}}></div>
                            </div>
                        </li>
                        <li style={{color: "#359AF2"}}><h5>CSS</h5><div className="Outer"><div style={{ color: "60%",background: "#359AF2"}}></div></div></li>
                        <li style={{color: "#FE5959"}}><h5>JavaScript </h5><div className="Outer"><div style={{ color: "40%",background: "#FE5959"}}></div></div></li>
                        <li style={{color: "#D6BBE3"}}><h5>React.js</h5> <div className="Outer"><div style={{ color: "20%",background: "#D6BBE3"}}></div></div></li>
                        <li style={{color: "#6446B0"}}><h5>Node.js</h5> <div className="Outer"><div style={{ color: "80%",background: "#6446B0"}}></div></div></li>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}

export default Graph
