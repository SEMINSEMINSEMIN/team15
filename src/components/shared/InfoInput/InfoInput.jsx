import React from "react";

export default function InfoInput({
    type,
    placeHolder,
    pattern,
    label,
    required,
    minlength,
    maxlength,
    onBlur,
    onChange,
}) {
    let inpEl = (
        <input
            type={type}
            placeholder={placeHolder}
            pattern={pattern}
            minLength={minlength}
            maxLength={maxlength}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={(e) => {
                e.target.style.backgroundColor = "red";
            }}
        />
    );

    if (required) {
        inpEl = (
            <input
                type={type}
                placeholder={placeHolder}
                pattern={pattern}
                minLength={minlength}
                maxLength={maxlength}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={(e) => {
                    e.target.style.backgroundColor = "red";
                }}
                required
            />
        );
    }

    return (
        <label>
            <span>{label}</span>
            {inpEl}
        </label>
    );
}
