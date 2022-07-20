import React from 'react'

const AccountHeader = ({ user }) => {
    return (
        <>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
        </>
    );
}

export default AccountHeader;