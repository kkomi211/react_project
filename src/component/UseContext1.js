import { useContext } from "react";
import { PersonContext } from "./context/PersonContext";

function Contents1() {
    let user = useContext(PersonContext);
    
    return <>
        <div>{"Context로 보낸 name : " + user.name}</div>
        <div>{"Context로 보낸 age : " + user.age}</div>
        <div>{"Context로 보낸 addr : " + user.addr}</div>
    </>
}

function Contents2(props) {
    return <>
        <div>{"props로 보낸 name : " + props.name}</div>
    </>
}

function Body(props) {
    return <>
        <Contents1></Contents1>
        <Contents2 name={props.name}></Contents2>
    </>
}

function Project(props) {
    return <>
        <Body name={props.name}></Body>
    </>
}

function ContextEx() {
    let name = "홍길동";

    let user = {
        name : "홍길동",
        age : 30,
        addr : "인천"
    }
    return <>
        <PersonContext.Provider value={user}>
            <Project name={name}></Project>
        </PersonContext.Provider>
    </>
}

export default ContextEx;