import React from "react";

function Item(props) {
    return (
        <div
            className="card m-3"
            style={{
                width: "14rem",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <img className="card-img-top" src={props.image} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    <strong>Species: </strong>
                    {props.species}
                </p>
                <a href="/" className="btn btn-dark btn-sm">
                    Read More
                </a>
            </div>
        </div>
    );
}

export default Item;
