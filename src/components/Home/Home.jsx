import React from 'react';
import { Redirect } from 'react-router-dom';

function Home (props){
    const { match } = props;
    console.log(match);
    return (
        <div>
            <h1>Homeページです！</h1>
        </div>
    )
}

export default Home;