import React from 'react';

function Welcome(props) {
    console.log(props);
    return (
        <div>
             <h1>{props.name}:Trịnh Phong Tâm </h1>
        </div>
    );
}

export default Welcome;