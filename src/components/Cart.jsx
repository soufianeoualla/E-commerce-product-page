import delete_icon from './assets/icon-delete.svg'
import image_1_thumbnail from './assets/image-product-1-thumbnail.jpg' 

const Cart = ({cartItems,setCartItems}) => {
  return (
    <div className="cart-wrapper">
        <strong>Cart</strong>
        {cartItems > 0 && <div className="item">
            
                <img 
                className='product-image'
                src={image_1_thumbnail} alt="" />
            
            <div className="product-details">
                <p>Fall Limited Edition Sneakers</p>
                <p>$125.00 x {cartItems} <b> ${(125.00 * cartItems).toFixed(2)} </b></p>
            </div>
            <img
            onClick={()=>setCartItems(0)} 
            src={delete_icon} 
            alt=""
            className='delete' />
        </div>}
       {cartItems > 0 && <button className="primary-btn">
            Checkout
        </button>}

        {cartItems === 0 && <p className='empty'>Your cart is empty</p> }

    </div>
  )
}

export default Cart