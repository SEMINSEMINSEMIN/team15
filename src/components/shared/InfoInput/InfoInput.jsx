import React from "react";

export default function InfoInput({
    attr: { type, placeHolder, pattern, label, required },
}) {
    if (required) {
        return (
            <label>
                <span>{label}</span>
                <input
                    type={type}
                    placeholder={placeHolder}
                    pattern={pattern}
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
                />
            </label>
        );
    }
}
