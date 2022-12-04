import React, {useRef} from "react";

// https://developer-talk.tistory.com/330
export default function ProfileImageSet() {
    const image = useRef(null);

    const handleFiles = (e) => {
        console.log(e.target.files);
        const selectedFile = [...e.target.files];
        const fileReader = new FileReader();

        fileReader.readAsDataURL(selectedFile[0]);

        fileReader.onload = function () {
            image.current.src = fileReader.result;
        }
    }
    return (
        <label>
            <span>프로필 사진 이미지 설정</span>
            <img src={require(`../../../assets/basic-profile-img.png`)} alt="" ref={image} />
            <input 
                type="file" 
                accept="image/*"
                onChange={handleFiles}
            />
        </label>
    );
}
