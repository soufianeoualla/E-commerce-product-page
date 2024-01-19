import Product from "./Product"

const ProductMobile = ({selectIndex,setSelectIndex,handleNextButton,handlePrevButton}) => {
  return (
    <div className="mobile-product">
        <Product
        selectIndex={selectIndex}
        setSelectIndex={setSelectIndex}/>

        <button onClick={handlePrevButton}
        className="prev">
        <i className="fa-solid fa-chevron-left"></i>
        </button>

        <button
        onClick={handleNextButton}
         className="next">
        <i className="fa-solid fa-chevron-right"></i>
        </button>
    </div>
  )
}

export default ProductMobile