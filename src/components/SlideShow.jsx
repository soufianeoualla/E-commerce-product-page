import Product from "./Product"

const SlideShow = ({setImageClicked,selectIndex,setSelectIndex,handleNextButton,handlePrevButton}) => {

  

  return (
    <div className="slide-show">
      <i onClick={()=>setImageClicked(false)}
      className="fa-solid fa-xmark close"></i>
        
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

export default SlideShow