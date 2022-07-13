import { useContext } from "react";
import { Posts } from "../../components";
import { PostContext } from "../../context/PostContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Categories = () => {
  const { categories } = useContext(PostContext);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 2000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      {categories.map((category) => (
        <div
          key={category.id}
          className="mx-auto w-full shadow-md rounded-sm p-2"
        >
          <h1 className="text-xl font-bold my-4">{category.name}</h1>
          <Carousel
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1"
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {category.posts.map((post) => (
              <Posts post={post} />
            ))}
          </Carousel>
        </div>
      ))}
    </>
  );
};

export default Categories;
