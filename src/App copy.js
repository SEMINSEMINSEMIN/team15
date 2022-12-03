import React from "react";
import ProfileSetInpsTemp from "./components/ProfileSetInpsTemp/ProfileSetInpsTemp";

export default function App() {
    return (
        <>
            <ProfileSetInpsTemp formId={"myform"} />
            <input type="submit" form="myform" value="제출" />
        </>
    );
}
