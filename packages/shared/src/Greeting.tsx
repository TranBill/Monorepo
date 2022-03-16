import React from 'react';

interface GreetingProps {
    whom?: string
    from?: string
}

const Greeting: React.VFC<GreetingProps> = ({ whom = 'World', from='Bill' }) => {
    return (
        <>
        <h1>Hello {whom}</h1>
        <h2>from {from}</h2>
        </>
    );
}

export default Greeting;