import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const cities = [
    {
      name: "Hong Kong",
      image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
    },
    {
      name: "Macao",
      image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
    },
    {
      name: "Japan",
      image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
    },
    {
      name: "Las Vegas",
      image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp",
    },
  ];

  return (
    <div style={{ width: "40%", margin: "40px auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Top Destinations</h2>
      <Slider {...settings}>
        {cities.map((city, index) => (
          <div key={index}>
            <img
              src={city.image}
              alt={city.name}
              style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
            />
            <p
  style={{
    textAlign: "center",
    marginTop: "-50px",
    color: "white",
    background: "rgba(0,0,0,0.5)",
    padding: "10px",
    borderRadius: "0 0 10px 10px",
    transition: "color 0.3s, transform 0.3s",
    cursor: "pointer"
  }}
  onMouseEnter={(e) => {
    e.target.style.color = "#ff9900";
    e.target.style.transform = "scale(1.1)";
  }}
  onMouseLeave={(e) => {
    e.target.style.color = "white";
    e.target.style.transform = "scale(1)";
  }}
>
  {city.name}
</p>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
