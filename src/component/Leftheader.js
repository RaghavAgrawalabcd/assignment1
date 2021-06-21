import React from 'react'
import "../css/Leftheader.css"
export default function Leftheader() {
    return (
        <div className="LeftHeader">
            <div className="Icons">
                <div className="Logo">
                <img src="https://th.bing.com/th/id/R0cf37c754a91daf2a52a986cb36fb2da?rik=cmK7ubl7PovSBQ&riu=http%3a%2f%2fi.imgur.com%2fp7xsRWK.png%3f1&ehk=%2fDadV4CJkcOcxSdMw074SeOGR9O82VnTu19Cw8LDhHE%3d&risl=&pid=ImgRaw"/>
                </div>
                <div className="Icon" >
                    <i class="fas fa-home" ></i>
                </div>
                <div className="Icon" >
                    <i class="far fa-chart-bar"></i>
                </div>
                <div className="Icon" >
                    <i class="fas fa-camera"></i>
                </div> 
                <div className="Icon" >
                    <i class="fas fa-folder"></i>
                </div>
                <div className="Icon" >
                    <i class="far fa-calendar"></i>
                </div>
                <div className="Icon" >
                    <i class="fas fa-user-friends"></i>
                </div>
                <div className="Icon" >
                    <i class="fas fa-sticky-note"></i>
                </div>
                <div className="Icon" >
                    <i class="fas fa-file-export"></i>
                </div>
                <div className="Setting">
                <i class="fas fa-cog"></i>
                </div>
            </div>
        </div>
    )
}
