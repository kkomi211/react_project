import './App.css';

function List(props) {
    // let list = [];
    // for (let i = 0; i < props.list.length; i++) {
    //     list.push(<li key={props.list[i].id}>{props.list[i].id} : {props.list[i].name}</li>);
    // }

    // let newList = props.list.map(item => {
    //     return <li key={item.id}>{item.name}</li>
    // })
    console.log(props.testList);

    return (
        <>

            {props.testList.map(item => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                )
            })}

        </>
    )
}

function App() {
    let testList = [
        { id: "hong", name: "홍길동", age: 30 },
        { id: "kim", name: "김철수", age: 25 },
        { id: "park", name: "박영희", age: 20 }
    ];
    return (
        <>

            <table>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
                {testList.map(item => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}
export default App;