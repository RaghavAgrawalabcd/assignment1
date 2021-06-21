import React from 'react';
import "../css/Topheader.css";
import PercentageCard from "./PercentageCard"
import Header from "./Header";
import ContentRigh from "./ContentRigh";
import Graph from "./Graph";
import ReferalDepartment from "./ReferalDepartment"
export default function Topheader() {
    return (
        <div className="TopHeader">
            <Header/>
            <div className="Contents">
                <div className="ContentLeft">
                    <div className="Level1">
                        <PercentageCard></PercentageCard>
                        <PercentageCard></PercentageCard>
                        <PercentageCard></PercentageCard>
                    </div>
                    <div className="Level2">
                        <Graph></Graph>
                    </div>
                    <div className="Level3">
                        <ReferalDepartment></ReferalDepartment>
                    </div>
                </div>
                <div className="ContentRight">
                    <ContentRigh></ContentRigh>
                </div>
            </div>
        </div>
    )
}
