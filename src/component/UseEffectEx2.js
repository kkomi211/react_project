import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EffectEx() {
    const navigate = useNavigate();
    let [text, setText] = useState("");
    let [list, setList] = useState([]);
    function fnList() {
        fetch("http://localhost:3010/product?keyword="+text)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setList(data.list);

            })
    }

    useEffect(() => {
        // console.log("서버에 요청해서 제품 목록을 가져오는 부분");
        fnList();
    }, [text])

    return (<>
        <div>
            <input value={text} onChange={(e) => {setText(e.target.value);}}></input>
            <button onClick={fnList}>검색</button>
        </div>
        <div>text : {text}</div>
        <hr></hr>
        <div>
            <button onClick={()=>{
                navigate("/product/add");
            }}>제품등록</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>삭제</th>
                    <th>수정</th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => {
                    return (
                        <tr key={item.productId}>
                            <td>{item.productId}</td>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => {
                                    if(!window.confirm("정말 삭제?")){
                                        return;
                                    }
                                    fetch("http://localhost:3010/product/" + item.productId, {
                                        method: "DELETE"
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            alert(data.msg);
                                            fnList();
                                        })
                                }}>삭제</button>
                            </td>
                            <td><button onClick={()=>{
                                navigate("/product/edit/" + item.productId);}
                            }>수정</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}

export default EffectEx;