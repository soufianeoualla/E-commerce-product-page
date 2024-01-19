import logo from './assets/logo.svg'
import avatar from './assets/image-avatar.png'
import cart from './assets/icon-cart.svg'
import Cart from './Cart'
import NavList from './NavList'
import menu from './assets/icon-menu.svg'
import MobileMenu from './MobileMenu'
const Header = ({cartItems,setCartItems,cartClicked,setCartClciked,menuClicked,setMenuClicked}) => {

  return (
    <header>
        <div className="left-side">
            <img 
            onClick={()=>setMenuClicked(true)}
            src={menu} 
            alt="" 
            className='menu-icon'/>
            <div className="logo">
                    <img src={logo} alt="" />
            </div>
            <NavList/>
        </div>
        <div className="right-side">
            <div 
            onClick={()=>setCartClciked(!cartClicked)}
            className="cart">
                    <img src={cart} alt="" />
                    {cartItems > 0 && <span className="items-number">
                        {cartItems}
                    </span>}
            </div>
            <div className="user">
                <img src={avatar} alt="" />
            </div>
        </div>
        {menuClicked && <MobileMenu setMenuClicked={setMenuClicked} />}
        
        {cartClicked && <Cart 
         cartItems={cartItems}
         setCartItems={setCartItems} />}
    </header>
  )
}

export default Header