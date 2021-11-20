import React from "react";
import styled from "styled-components";
import "./Slideshow.css";

const SlideshowContainer = styled.div`
  margin: 20px auto;
  overflow: hidden;
  max-width: 500px;
`;

const Slide = styled.div`
  display: inline-block;
  width: 100%;
  border-radius: 40px;
`;

function Slideshow({ slides }) {
  const [index, setIndex] = React.useState(0);

  return (
    <SlideshowContainer>
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          whiteSpace: "nowrap",
          transition: "ease 1000ms",
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>
            <img src={slide.url} alt={slide.alt} style={{ width: "100%" }} />
          </Slide>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </SlideshowContainer>
  );
}

export default Slideshow;
