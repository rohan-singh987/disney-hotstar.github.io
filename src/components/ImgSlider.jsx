import styled from "styled-components";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"


const ImgSlider = () => {

    let settings = {
        dots: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings} >
            
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="" />
            </Wrap>
            
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
            
            <Wrap>
                <img src="/images/slider-scale.jpg" alt="" />
            </Wrap>
 
            <Wrap>
                <img src="/images/slider-scales.jpg" alt="" />
            </Wrap>
            
            
            <Wrap>
                <img src="/images/slide1.jpg" alt="" />
            </Wrap>
            
            
            
            <Wrap>
                <img src="/images/slide4.jpg" alt="" />
            </Wrap>
            
            
            
            <Wrap>
                <img src="/images/slide2.jpg" alt="" />
            </Wrap>
            
            
            
            <Wrap>
                <img src="/images/slide3.jpg" alt="" />
            </Wrap>
            
            
            <Wrap>
                <img src="/images/slide5.jpg" alt="" />
            </Wrap>
            
            
            <Wrap>
                <img src="/images/slide6.jpg" alt="" />
            </Wrap>
            
            
            <Wrap>
                <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/mb_marvel_20210405_2x-logo?fit=constrain&cropN=0,0,1,1&fmt=jpeg&qlt=90&wid=1200" alt="" />
            </Wrap>
            
            
            
            
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button{
        &:before{
            font-size:10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }
    
    
    .slick-list{
        overflow: visible;
    }
    button{
        z-index: 1;
    }


`

const Wrap = styled.div`
    cursor: pointer;

    img{
        border: 5px solid transparent;
        border-radius: 20px;
        // width: 759px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
                    rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transition-duration: 400ms;

        &:hover{
            border: 10px solid rgba(249, 249, 249, 0.8);
        }
    }
`