import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import InfoInput from "../../components/shared/InfoInput/InfoInput";
import Warning from "../../components/shared/Warning/Warning";

const LoginBtn = ({ isDisabled }) => {
    if (isDisabled) {
        return (
            <button className="btn_login" disabled>
                로그인
            </button>
        );
    } else {
        return (
            <button style={{ backgroundColor: "salmon" }} className="btn_login">
                로그인
            </button>
        );
    }
};

export default function Login() {
    const validityState = useRef([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const $form = useRef(null);

    const handleIdChange = (e) => {
        if (!e.target.validity.patternMismatch) {
            validityState.current[0] = "id 양식 부합";
            console.log(validityState.current);
        } else {
            validityState.current[0] = "id 양식 부합 x";
            console.log(validityState.current);
            !isDisabled && setIsDisabled(true);
        }

        if (
            validityState.current[0] === "id 양식 부합" &&
            validityState.current[1] === "pw 양식 부합"
        ) {
            setIsDisabled(false);
        }
    };

    const handlepwChange = (e) => {
        if (!e.target.validity.patternMismatch) {
            validityState.current[1] = "pw 양식 부합";
            console.log(validityState.current);
        } else {
            validityState.current[1] = "pw 양식 부합 x";
            console.log(validityState.current);
            !isDisabled && setIsDisabled(true);
        }

        if (
            validityState.current[0] === "id 양식 부합" &&
            validityState.current[1] === "pw 양식 부합"
        ) {
            setIsDisabled(false);
        }
    };

    // const handlepwBlur = (e) => {
    //     if (!isIdInvalid && !ispwInvalid) {
    //         setIsDisabled(false);
    //     }
    // };

    return (
        // 이메일 형식, 비밀번호 형식, 가입된 이용자인가 확인 필요
        <main className="container">
            <h1 className="tit_login">로그인</h1>
            <form ref={$form}>
                <InfoInput
                    label={"이메일"}
                    type={"text"}
                    required={true}
                    pattern={"[a-zA-Z0-9]+[@][a-zA-Z0-9]*.[a-zA-Z]+"}
                    onChange={handleIdChange}
                />

                <InfoInput
                    label={"비밀번호"}
                    type={"password"}
                    required={true}
                    pattern={"[0-9]{4}"}
                    onChange={handlepwChange}
                />

                <Warning
                    message={"이메일 또는 비밀번호가 일치하지 않습니다."}
                    visible={true}
                />

                <LoginBtn isDisabled={isDisabled} />

                <button type="click" className="btn_join">
                    이메일로 회원가입
                </button>
            </form>
        </main>
    );
}
