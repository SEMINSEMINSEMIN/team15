import React from 'react'

export default function InputAndWarn({
    type, 
    placeHolder, 
    pattern, 
    label,
    required, 
    minlength, 
    maxlength,
    onBlur
}) {
    if (required) {
        return (
            <label>
                <span>{label}</span>
                <input
                    type={type}
                    placeholder={placeHolder}
                    pattern={pattern}
                    minLength={minlength}
                    maxLength={maxlength}
                    onBlur={onBlur}
                    onFocus={(e) => {e.target.style.backgroundColor="red"}}
                    required
                />
            </label>
        )
    } else {
        return (
            <label>
                <span>{label}</span>
                <input
                    type={type}
                    placeholder={placeHolder}
                    pattern={pattern}
                    minLength={minlength}
                    maxLength={maxlength}
                    onBlur={onBlur}
                    onFocus={(e) => {e.target.style.backgroundColor="red"}}
                />
            </label>
        )       
    }
}