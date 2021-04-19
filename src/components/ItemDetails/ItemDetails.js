import React from 'react';
import './items.css';
const images = require.context('../../data/images');

export default function ItemDetails(props) {
    let data = props.data;
    let type = props.type;
    return (
        <div className={`paper ${type === "big" ? "big" : "default" }`}>
            <div style={{height: "calc(100% - 50px)"}}>
                <img style={{height: "100%", width: "100%", objectFit: "fill"}} src={images("./" + data.img).default} alt="tshirt"></img>
            </div>
            <div style={{height: "50px", display: "flex", flexDirection: "column", justifyContent: "space-around", textTransform: "capitalize"}}>
                <div className="itemname">{data.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
                    <div>{data.category}</div>
                    <div>{data.price} $</div>
                </div>
            </div>
        </div>
    );
}