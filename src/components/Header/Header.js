import React from "react";

export const Header = (props) => {
    return (
        <header className="masthead" style={{backgroundImage: "url('./img/" + props.imgName + ".jpg')"}}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                <h1>{props.title}</h1>
                <span className="subheading">{props.subtitle}</span>
                </div>
            </div>
            </div>
        </div>
        </header>
    )
}