import React from "react";
import ProfileImageSet from "../shared/ProfileImageSet/ProfileImageSet";
import InfoInput from "../shared/InfoInput/InfoInput";
import Warning from "../shared/Warning/Warning";

export default function ProfileSetInpsTemp({ formId }) {
    return (
        <form id={formId}>
            <ProfileImageSet />
            <InfoInput
                attr={{
                    type: "text",
                    label: "사용자 이름",
                    placeHolder: "2~10자 이내여야 합니다.",
                    required: true,
                }}
            />
            <InfoInput
                attr={{
                    type: "text",
                    label: "계정 ID",
                    placeHolder:
                        "영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.",
                    required: true,
                }}
            />
            <Warning
                message={"영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."}
            />
            {/* 소개의 경우 required를 넣어야 할까 빼야 할까 */}
            <InfoInput
                attr={{
                    type: "text",
                    label: "소개",
                    placeHolder: "자신과 판매할 상품에 대해 소개해 주세요!",
                }}
            />
        </form>
    );
}
