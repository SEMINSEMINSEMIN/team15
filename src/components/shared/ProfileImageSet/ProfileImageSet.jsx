import React from "react";

export default function ProfileImageSet() {
    const imgFile = "basic-profile-img.png";
    return (
        <label>
            <span>프로필 사진 이미지 설정</span>
            <img src={require(`../../../assets/${imgFile}`)} alt="" />
            <input type="file" accept="image/*" />
        </label>
    );
}
