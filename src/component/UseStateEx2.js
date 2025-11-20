import { useState } from "react";

function StateEx() {    
    let [colorFlg, setColorFlg] = useState(true);
    function fnChange(){
        setColorFlg(!colorFlg);
    }

    return (
        <>
            <div>
                <button onClick={fnChange}>blue/red</button>
            </div>
            <div style={{color : colorFlg ? "blue" : "red", fontWeight : "bold"}}>React 재밌다!</div>
        </>
    )
}

export default StateEx;