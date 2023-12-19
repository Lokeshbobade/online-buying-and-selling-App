import React from 'react'
import Featured from './Featured';
const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://cdn.shopify.com/s/files/1/0551/8806/2395/files/BANNER-5.jpg?v=1644233146" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="https://www.reeshma.com/pub/media/wysiwyg/Indian-Dresses-Autumn-Sale.gif" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://www.likeadiva.com/media/staticbanner/banner-05sep17.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <h2 className="text-center">Featured Products</h2>
                        <div className="search-container">    
      </div>
      <div className="cards-container">
      <Featured 
      image = 'https://ae01.alicdn.com/kf/HTB16dQqIVXXXXb5XFXXq6xXFXXXl/2015-Fashion-Autumn-Style-Sport-V-Neck-Full-Sleeve-T-Shirt-Men-Cotton-Bottons-Casual-Men.jpg'
      price= '999'
      color= 'White Blue'
      name='TShirt'
      />
      <Featured 
      image = 'https://images-na.ssl-images-amazon.com/images/I/71e67mPKkZL._AC_UL1500_.jpg'
      price= '899'
      color= 'Black'
      name='TShirt'
      />
      <Featured 
      image = "https://i.etsystatic.com/22388648/r/il/869835/2239000468/il_794xN.2239000468_efqh.jpg"
      price= '1599'
      color= 'Pink'
      name='Kurtha'
      />
      <Featured 
      image = "https://n4.sdlcdn.com/imgs/b/n/e/Being-Fab-Green-Formal-Shirt-SDL798545728-1-0b951.jpg"
      price= '1399'
      color='Green'
      name='Shirt'
      />
      <Featured 
      image = "https://handcmediastorage.blob.core.windows.net/productimages/FV/FVPMA001-J30-143606-800px-1040px.jpg"
      price= '899'
      color='Pink'
      name='Shirt'
      />
      <Featured 
      image = "https://oldnavy.gapcanada.ca/webcontent/0017/388/792/cn17388792.jpg"
      price= '1599'
      color='Faded Blue'
      name='Pant'
      />
      <Featured 
      image = "https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/781214538/Untitled_design__7_.jpg"
      price= '999'
      color='Brown Gold'
      name='Kurtha'
      />
      <Featured 
      image = "https://i.pinimg.com/originals/45/23/8e/45238ee1075f336e51a5dea50432c3d0.jpg"
      price= '3499'
      name='Langa Voni'
      color ='Gold Pink'
      />
       <Featured 
      image = "https://oldnavy.gap.com/webcontent/0026/986/405/cn26986405.jpg"
      price= '999'
      name='Leggin'
      color ='Black'
      />
      <Featured 
      image = "https://1.bp.blogspot.com/-GbKmUw7h8GE/XRpYytut6xI/AAAAAAAADGQ/jjV5LB5CuDwE8Fuu_kn0m3cGVyORsjm5gCLcBGAs/s1600/women-in-saree-35.jpg"
      price= '1299'
      name='Saree'
      color ='Gold'
      />
      </div>
    </div>)
}
export default Home
