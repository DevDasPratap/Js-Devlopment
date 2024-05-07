import React from "react";
const UserCard = (props)=>{
    return (
        <div className="user-card">
            <img src={props.data.picture.thumbnail} className="user-img"/>
            <h3>{props.data.first}</h3>
            <p>{props.data.phone}</p>
            <p>{props.data.email}</p>
            <p>{props.data.gender}</p>
            <p>{props.data.location.country}</p>
        </div>
    )
}

export default UserCard