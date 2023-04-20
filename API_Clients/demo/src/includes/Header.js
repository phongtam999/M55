import React from 'react';

function Header(props) {
    return (
        <div>
            <h1>Menu username = {props.username}</h1>
        </div>
    );
}

export default Header;