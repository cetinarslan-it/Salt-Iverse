import React from 'react';

const LoadingPage = ({ message }) => {
    return (
        <>
            <h1>Loading...</h1>
            {message && (<p>{message}</p>)}
        </>
    );
}

export default LoadingPage;