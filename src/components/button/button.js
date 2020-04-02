import React from 'react';
import './button.css';

function Button({label}) {
    const color = label === "green" ? "green" : "red";
    return <div data-testid="button" className={`button-style ${color}`}>{label}</div>
}

export default Button;