import React from 'react';
import './input.css';

function Input({ type, placeholder, onchange }) {
    return (
        <div>
            <input className="input" type={type} placeholder={placeholder} onChange={onchange}  />
        </div>
    );
}
export default Input;