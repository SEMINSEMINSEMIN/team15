import React from "react";

export default function InfoInput({
    attr: { type, placeHolder, pattern, label, required, minlength, maxlength },
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
                    required
                />
            </label>
        );
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
                />
            </label>
        );
    }
}
