import React from "react";
import ProfileImageSet from "./components/shared/ProfileImageSet/ProfileImageSet";
import InfoInput from "./components/shared/InfoInput/InfoInput";

export default function App() {
    return (
        <form>
            <InfoInput
                attr={{
                    type: "text",
                    label: "사용자 이름",
                    placeHolder: "2~10자 이내여야 합니다.",
                }}
            />
            <InfoInput
                attr={{
                    type: "password",
                    label: "이메일을 입력하세요.",
                    placeHolder: "2~10자 이내여야 합니다.",
                    pattern:
                        "[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z]+[.]?[a-zA-Z]*",
                    required: true,
                }}
            />
            <button>제출</button>
        </form>
    );
}
