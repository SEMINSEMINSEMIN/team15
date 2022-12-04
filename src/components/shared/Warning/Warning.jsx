import React from "react";

export default function Warning({ message }) {
    if (message) {
        return <strong>*{message}</strong>;
    }
}
