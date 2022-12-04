import React from "react";
import ProfileImageSet from "../shared/ProfileImageSet/ProfileImageSet";
import InputAndWarn from "../InputAndWarn/InputAndWarn";
import "./profileSetInpsTemp.css"

export default function ProfileSetInpsTemp({ formId }) {
    return (
        <form id={formId}>
            <ProfileImageSet />
            <InputAndWarn
                attr={{
                    type: "text",
                    label: "사용자 이름",
                    placeHolder: "2~10자 이내여야 합니다.",
                    minlength: "2",
                    maxlength: "10",
                    pattern: "[a-zA-Zㄱ-힣 ]{2,10}",
                    required: true,
                    message: "경고"
                }}
            />
            <InputAndWarn
                attr={{
                    type: "text",
                    label: "계정 ID",
                    placeHolder:
                        "영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.",
                    pattern: "[a-zA-Z0-9._]+",
                    required: true,
                    message: "경고"
                }}
            />
            <InputAndWarn
                attr={{
                    type: "text",
                    label: "소개",
                    placeHolder: "자신과 판매할 상품에 대해 소개해 주세요!",
                }}
            />
        </form>
    );
}
