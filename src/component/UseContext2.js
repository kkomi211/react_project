import { useContext, useState } from "react";
import { PersonContext } from "./context/PersonContext";

function Contents1() {
    let login = useContext(PersonContext);
    [login.loginFlg, login.setLogin] = useState(false);
    return <>
        <div style={{
            border: "1px solid black",
            height: "100px",
            width: "250px",
            margin: "10px"
        }}>
            Contents1
            <div>
                {/* 헤더의 로그인/로그아웃 버튼 클릭시 */}
                {/* 이곳의 내용으로 로그인되었습니다!, 로그아웃 되었습니다! */}
                {/* 2개의 문구가 왓다갓다 하도록 */}
                { login.loginFlg ?
                <div style={{color: "red"}}>로그인 되었습니다!</div> :
                <div style={{color: "blue"}}>로그아웃 되었습니다!</div>
                }
            </div>
        </div>
    </>
}

function Contents2() {
    return <>
        <div style={{
            border: "1px solid black",
            height: "100px",
            width: "250px",
            margin: "10px"
        }}>
            Contents2
        </div>
    </>
}

function Body() {
    return <>
        <div style={{
            border: "1px solid black",
            height: "300px",
            width: "400px",
            margin: "10px"
        }}>
            Body
            <Contents1></Contents1>
            <Contents2></Contents2>
        </div>
    </>
}

function Header() {
    let login = useContext(PersonContext);
    console.log(login);
    [login.loginFlg, login.setLogin] = useState(false);
    return <>
        <div style={{
            border: "1px solid black",
            height: "80px",
            width: "400px",
            margin: "10px"
        }}>
            Header
            <div>
                <button onClick={() => {
                    login.setLogin(!login.loginFlg);

                }}>로그인/로그아웃</button> 
            </div>
        </div>
    </>
}

function Project() {
    return <>
        <div style={{ border: "1px solid black", height: "600px" }}>
            Project
            <Header></Header>
            <Body></Body>
        </div>
    </>
}

function ContextEx() {
    let [loginFlg, setLogin] = useState(false);
    let login = {
        loginFlg: loginFlg,
        setLogin: setLogin
    }
    return <>
        <PersonContext.Provider value={login}>
            <Project></Project>
        </PersonContext.Provider>
    </>
}

export default ContextEx;