import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductAdd() {
    const navigate  = useNavigate();
    let nameRef = useRef("");
    let [price, setPrice] = useState("");
    let priceRef = useRef("");
    function fnNameRef() {
        console.log(nameRef.current.value);
        nameRef.current.focus();
    }
    function fnAdd() {
        // 가격(숫자) 입력 후 '저장 버튼 클릭 시
        // 가격이 0이하면 '1이상의 숫자를 입력해주세요` 알림 후
        // 가격 input박스에 focus추가
        if (priceRef.current.value <= 0) {
            alert("1이상의 숫자를 입력해주세요");
            priceRef.current.focus();
        }
        // tbl_product테이블에 저장
        fetch("http://localhost:3010/product", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                productName: nameRef.current.value,
                price: priceRef.current.value
            })
        })
            .then(res => res.json())
            .then(data => {
                alert("저장되었습니다!");
            })
    }

    useEffect(() => {
        fnNameRef();
    }, [])
    return <>
        {/* <div>제품명 : {nameRef.current.value}</div>
        <div>가격 : {price}</div>

        <div>제품명 : <input ref={nameRef}></input></div>
        <div>가격 : <input value={price} onChange={(e)=>setPrice(e.target.value)}></input></div> */}
        <div>제품명 : <input ref={nameRef}></input></div>
        <div>가격 : <input ref={priceRef}></input></div>
        <div>
            <button onClick={fnNameRef}>focus</button>
            <button onClick={fnAdd}>저장</button>
            <button onClick={()=>{
                navigate("/product/list");
            }}>돌아가기</button>
        </div>
    </>
}

export default ProductAdd;