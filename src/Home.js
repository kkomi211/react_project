// 리액트에선 다른페이지로 넘어갈때 Link태그를 a보다 주로 사용함
import {Link} from  'react-router-dom'

function Home(){
    return <>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/context1">useContext실습1</Link></li>
            <li><Link to="/context2">useContext실습2</Link></li>
            <li><Link to="/effect">useEffect실습</Link></li>
            <hr></hr>
            <li><Link to="/product/list">제품목록</Link></li>
            <li><Link to="/product/add">제품등록</Link></li>
            <hr></hr>
            <li><Link to="/mui1">MUI 1</Link></li>

            {/* <li><a href="/context2">useContext실습2(a태그)</a></li> */}
        </ul>
    </>
}

export default Home;