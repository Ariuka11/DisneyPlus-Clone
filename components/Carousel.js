import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComp() {
  return (
    <div className="relative mt-5 mx-auto shadow-2xl max-w-screen-2xl">
      <Carousel
        autoplay
        infiniteloop
        showStatus={false}
        showIndicator={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
