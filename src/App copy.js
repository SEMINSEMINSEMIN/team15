import React from "react";
import ProfileSetInpsTemp from "./components/ProfileSetInpsTemp/ProfileSetInpsTemp";
import Button1st from "./components/shared/Button1st/Button1st";

export default function App() {
    return (
        <>
            <ProfileSetInpsTemp formId={"myform"} />
            <Button1st formId={"myform"} btnText={"감귤마켓 시작하기"} />
        </>
    );
}
