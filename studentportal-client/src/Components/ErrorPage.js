import React from 'react'

const ErrorPage = ({ message, submessage }) => {
    return (
        <>
            <h1>{message}</h1>
            {submessage && <p>{submessage}</p>}
        </>
    );
}

export default ErrorPage;