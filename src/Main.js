import StateEx1 from './component/UseStateEx1'
import StateEx2 from './component/UseStateEx2'
import EffectEx1 from './component/UseEffectEx1'
import EffectEx2 from './component/UseEffectEx2'
import UseRef from './component/UseRef'
import UseRef2 from './component/UseRef2'
import ProductAdd from './component/ProductAdd'
import ContextEx from './component/UseContext1'
import ContextEx2 from './component/UseContext2'
import ProductEdit from './component/ProductEdit'

import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import MUIEx1 from './muiComponent/MUI-Ex1'

function Main(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/context1" element={<ContextEx  />}></Route>
                <Route path="/context2" element={<ContextEx2 />}></Route>
                <Route path="/effect" element={<EffectEx2 />}></Route>

                <Route path="/product/list" element={<EffectEx2 />}></Route>
                <Route path="/product/add" element={<ProductAdd />}></Route>
                <Route path="/product/edit/:productId" element={<ProductEdit />}></Route>
                
                <Route path="/mui1" element={<MUIEx1 />}></Route>

            </Routes>
        </>
    )
}

export default Main;