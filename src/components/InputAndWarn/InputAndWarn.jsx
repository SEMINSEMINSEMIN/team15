import React from 'react'
import Warning from '../shared/Warning/Warning';
import { useState } from 'react';

export default function InputAndWarn({
    attr: {
        type, 
        placeHolder, 
        pattern, 
        label,
        required, 
        minlength, 
        maxlength,
        message
    }
}) {
    const [visible, setVisibility] = useState(false);
    if (visible) {
        if (required) {
            return (
                <>
                    <label>
                        <span>{label}</span>
                        <input
                            type={type}
                            placeholder={placeHolder}
                            pattern={pattern}
                            minLength={minlength}
                            maxLength={maxlength}
                            onBlur={(e) => {
                                e.target.style.backgroundColor="initial";
                                if (e.target.validity.patternMismatch){
                                    setVisibility(true);
                                } else {
                                    setVisibility(false);
                                }
                            }}
                            onFocus={(e) => {e.target.style.backgroundColor="red"}}
                            required
                        />
                    </label>
                    <Warning message={message}/>
                </>
            )
        } else {
            return (
                <>
                    <label>
                        <span>{label}</span>
                        <input
                            type={type}
                            placeholder={placeHolder}
                            pattern={pattern}
                            minLength={minlength}
                            maxLength={maxlength}
                            onBlur={(e) => {
                                e.target.style.backgroundColor="initial";
                                if (e.target.validity.patternMismatch){
                                    setVisibility(true);
                                } else {
                                    setVisibility(false);
                                }
                            }}
                            onFocus={(e) => {e.target.style.backgroundColor="red"}}
                        />
                    </label>
                    <Warning message={message}/>
                </>
            )       
        }
    } else {
        if (required) {
            return (
                <>
                    <label>
                        <span>{label}</span>
                        <input
                            type={type}
                            placeholder={placeHolder}
                            pattern={pattern}
                            minLength={minlength}
                            maxLength={maxlength}
                            onBlur={(e) => {
                                e.target.style.backgroundColor="initial";
                                if (e.target.validity.patternMismatch){
                                    setVisibility(true);
                                } else {
                                    setVisibility(false);
                                }
                            }}
                            onFocus={(e) => {e.target.style.backgroundColor="red"}}
                            required
                        />
                    </label>
                </>
            )
        } else {
            return (
                <>
                    <label>
                        <span>{label}</span>
                        <input
                            type={type}
                            placeholder={placeHolder}
                            pattern={pattern}
                            minLength={minlength}
                            maxLength={maxlength}
                            onBlur={(e) => {
                                e.target.style.backgroundColor="initial";
                                if (e.target.validity.patternMismatch){
                                    setVisibility(true);
                                } else {
                                    setVisibility(false);
                                }
                            }}
                            onFocus={(e) => {e.target.style.backgroundColor="red"}}
                        />
                    </label>
                </>
            )       
        }
    }
}