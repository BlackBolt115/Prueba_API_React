import Card from "ui/components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css"
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";

export default function DirectoryList({ offerList, ...props }) {
    console.log("Here is your offers list", offerList);

    const NextArrow = ({onClick}) => {
      return(
        <div className="arrow next" onClick={onClick}>
          <FaArrowRight/>
        </div>
      )
    }
    const PrevArrow = ({onClick}) => {
      return(
        <div className="arrow prev" onClick={onClick}>
          <FaArrowLeft/>
        </div>
      )
    }
    const [index, setIndex] = useState(0)
    const settings = {
      infinite: true,
      speed: 100,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next)=>setIndex(next)
    };

    return (
      <div>
      <Slider {...settings}>
      {offerList.map(({name, media, dv_category, dv_cashback}, idx)=>(
        <div className={idx==index?"slide activeSlide" : "slide"}>
          <Card negocio={{name, media, dv_category, dv_cashback}}/>
        </div>
      ))}
     </Slider>
      </div>
    )
}


/*{offerList.map(({name, media, dv_category})=>(
  <div className="col-md-4">
    <Card negocio={{name, media, dv_category}}/>
  </div>
))}*/
