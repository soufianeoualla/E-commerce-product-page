
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import ProductText from './components/ProductText'
import SlideShow from './components/SlideShow'
import Cart from './components/Cart'
import ProductMobile from './components/ProductMobile'

function App() {
 

    const[imageClicked,setImageClicked]=useState(false)
    const[selectIndex,setSelectIndex]=useState(0)
    const[count,setCount]=useState(0)
    const[cartItems,setCartItems]=useState(0)
    const[cartClicked,setCartClciked]=useState(false)
    const[menuClicked,setMenuClicked]=useState(false)


    const handlePrevButton = ()=> {
      if(selectIndex > 0) setSelectIndex(selectIndex - 1)
      else if (selectIndex === 0) setSelectIndex(3)
      
     }
   
     const handleNextButton =()=>{
       if(selectIndex < 3)setSelectIndex(selectIndex + 1)
       else if(selectIndex === 3) setSelectIndex(0)
     }
    
    
    const handleAddToCartButton = ()=>{
      setCartItems((prev)=> prev + count)
  
    }
    
    
  return (
    <>
    <div className={`${(imageClicked || menuClicked) && 'wrapper-overflow'} wrapper`}>
      <Header
      cartItems={cartItems}
      setCartItems={setCartItems}
      cartClicked={cartClicked}
      setCartClciked={setCartClciked}
      menuClicked={menuClicked}
      setMenuClicked={setMenuClicked} />

      <div className="product">
        <Product 
        setImageClicked={setImageClicked}
        selectIndex={selectIndex}
        setSelectIndex={setSelectIndex}
         />

        <ProductMobile
        selectIndex={selectIndex}
        setSelectIndex={setSelectIndex}
        handlePrevButton={handlePrevButton}
        handleNextButton={handleNextButton} />

        <ProductText 
        count={count}
        setCount={setCount}
        handleAddToCartButton={handleAddToCartButton} />

      </div>
      {imageClicked && <SlideShow 
      setImageClicked ={setImageClicked} 
      selectIndex={selectIndex}
      setSelectIndex={setSelectIndex}
      handleNextButton={handleNextButton}
      handlePrevButton={handlePrevButton} />}
      

    </div>
      
      
      
    </>
  )
}

export default App
