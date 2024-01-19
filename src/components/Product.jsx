import image_1_thumbnail from './assets/image-product-1-thumbnail.jpg' 
import image_2_thumbnail from './assets/image-product-2-thumbnail.jpg' 
import image_3_thumbnail from './assets/image-product-3-thumbnail.jpg' 
import image_4_thumbnail from './assets/image-product-4-thumbnail.jpg' 

import image_1 from './assets/image-product-1.jpg'
import image_2 from './assets/image-product-2.jpg'
import image_3 from './assets/image-product-3.jpg'
import image_4 from './assets/image-product-4.jpg'

const Product = ({setImageClicked,selectIndex,setSelectIndex}) => {
    const images = [image_1_thumbnail, image_2_thumbnail, image_3_thumbnail, image_4_thumbnail]
  return (
    <div className="images">
        <div onClick={()=>setImageClicked(true)}
        className="big-image">
            <img src={selectIndex === 0 ? image_1: selectIndex === 1 ? image_2: selectIndex === 2 ? image_3 :selectIndex === 3 ? image_4  : null } alt="" />
        </div>
        <div className="small-images">
                {images.map((n,index)=>
                    <div 
                    key={index}
                    className={`${selectIndex === index ? 'selected-img': null}`}>

                      <img 
                      onClick={() => setSelectIndex(index)}
                      className={`${selectIndex === index ? 'selected-thumbnail':null}`}
                      src={n}
                       alt="" />

                      
                    </div>
                  
                 
                      
                  
                
                )}
        </div>
    </div>
  )
}

export default Product