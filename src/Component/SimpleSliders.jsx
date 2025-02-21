import Slider from "react-slick";

function SimpleSliders() {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Fakruddin Mohammed",
      image: "https://www.ochron.co.in/wp-content/uploads/2023/06/6-300x225.jpg",
      review:
        "They understand what we want and give us more than what we need. Highly recommended!",
    },
    {
      name: "Jeff’s Home",
      image: "https://www.ochron.co.in/wp-content/uploads/2023/06/image-1-compressed-300x225.jpg",
      review: "Great interior design skills. Value for money. Will hire again!",
    },
    {
      name: "Krishna Chander",
      image: "https://www.ochron.co.in/wp-content/uploads/2023/06/ModularKitchen-300x225.webp",
      review:
        "One of the best designers in Chennai. They converted our house into a home!",
    },
    {
      name: "Sarah Williams",
      image: "https://www.ochron.co.in/wp-content/uploads/2023/06/6-300x225.jpg",
      review: "Amazing attention to detail! Loved the outcome.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 relative -z-10 " id="clients">
      <Slider {...settings} className="py-6 relative ">
        {testimonials.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center relative z-20">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg ">{item.name}</h3>
              <p className="text-gray-600 text-md mt-2">{item.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSliders;
