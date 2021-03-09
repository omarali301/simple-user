import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './User.css';

const User = (props) => {
  const history = useHistory();

  const handleClick = (userId) =>{
      const url = `userDetails/${userId}`
      history.push(url);

  }

    const {name, email,showDetails,id} = props.user;
    return (
        <div className="userDetails">
            <h1>This is user</h1>

            <h1>Name user : {name}</h1>
            <h3>user email : {email}</h3>
            <p>user id : {id}</p>

            <Link to={`/UserDetails/${id}`}><button>Show details</button></Link>

            <button onClick={() =>handleClick()}>Click for details</button>
        </div>
    );
};

export default User;