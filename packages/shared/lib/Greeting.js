import React from 'react';
const Greeting = ({ whom = 'World', from = 'Bill' }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null,
            "Hello ",
            whom),
        React.createElement("h2", null,
            "from ",
            from)));
};
export default Greeting;
