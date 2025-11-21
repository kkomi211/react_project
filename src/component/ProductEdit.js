import { useParams } from "react-router-dom";

function ProductEdit() {
    let { productId } = useParams();
    console.log(productId);

    return <>
        
    </>
}

export default ProductEdit;