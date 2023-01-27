import React from "react";
import './App.css';

export default function Post(props) {
    return (
        <div className="post">
            <div className="data">
                <div className="location-data">
                    <i class="fa-solid fa-location-dot"></i>

                    <h6>{props.item.location}</h6>
                    <h6><a href={props.item.googleMapsUrl}>  View location in map</a></h6>
                </div>
                <h3>{props.item.place}</h3>
                <p>{props.item.description}</p>
            </div>
            <div className="picture">
                <img src={props.item.imageUrl} alt="your image description" />
            </div>
            <hr />
        </div>

    )
}