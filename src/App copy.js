import React from "react";
import ProfileImageSet from "./components/shared/ProfileImageSet/ProfileImageSet";
import InfoInput from "./components/shared/InfoInput/InfoInput";
import Warning from "./components/shared/Warning/Warning";

export default function App() {
    return (
        <form>
            <Warning
                message={"영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."}
            />
        </form>
    );
}
