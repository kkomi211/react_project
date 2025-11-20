import Header from './component/Header';
import Footer from './component/Footer';

function App(){
    return (<>
        <Header title="안녕하세요"></Header>

        {/* 첫번째 Footer의 내용은 '푸터 입니다' 라고 출력 */}
        {/* Footer 내용을 클릭을 하면 '첫번째 푸터' alert창 출력 */}
        <Footer contents="푸터 입니다" fnAlert={()=>{
            alert("첫번째 푸터");
        }}></Footer>
        
        {/* 두번째 Footer의 내용은 '서브 푸터 입니다' 라고 출력 */}
        {/* Footer 내용을 클릭을 하면 '두번째 푸터' alert창 출력 */}
        <Footer contents="서브 푸터 입니다" fnAlert={()=>{
            alert("두번째 푸터");
        }}></Footer>
    </>)
}

export default App;