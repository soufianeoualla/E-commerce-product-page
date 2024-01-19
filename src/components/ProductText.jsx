import cart from './assets/icon-cart.svg'
import plus from './assets/icon-plus.svg'
import minus from './assets/icon-minus.svg'

const ProductText = ({count,setCount,handleAddToCartButton}) => {

    

    const handleMinusClcik = ()=>{
        if(count > 0) setCount(count - 1)
        else setCount(count)
    }
   

  return (
    <div className="text">
        <span>Sneaker Company</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="price">
            <div className="current-price">
                <h1>$125.00</h1>
                <span>50%</span>
            </div>
            <p className='old-price'>$250.00</p>
        </div>
        <div className="cta">
            <div className="number-items">

            <button onClick={handleMinusClcik}>
                    <img src={minus} alt="" />
                </button>
                    
                <b>{count}</b>

                <button onClick={()=>setCount(count + 1)}>
                    <img src={plus} alt="" />
                </button>
                    
            </div>
            
            <button onClick={handleAddToCartButton}
            className="primary-btn">
                    <img src={cart} alt="" />
                    Add to cart
            </button>
            
        </div>
    </div>
  )
}

export default ProductText