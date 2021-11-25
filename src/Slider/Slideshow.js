import React from "react";
import styled from "styled-components";

const SlideshowContainer = styled.div`
  margin: 20px auto;
  overflow: hidden;
  max-width: 500px;
`;

const SlideshowSlider = styled.div`
  transform: translate3d(${(props) => -props.index * 100}%, 0, 0);
  white-space: nowrap;
  transition: ease 1000ms;

  & > div {
    display: inline-block;
    width: 100%;
    border-radius: 40px;
  }

  & > div > img {
    width: 100%;
  }
`;

const SlideshowDot = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  cursor: pointer;
  margin: 15px 7px 0px;

  background-color: ${(props) => (props.active ? "#303030" : "#c4c4c4")};
`;

function Slideshow({ slides }) {
  const [index, setIndex] = React.useState(0);

  return (
    <SlideshowContainer>
      <SlideshowSlider index={index}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.url} alt={slide.alt} />
          </div>
        ))}
      </SlideshowSlider>

      <div>
        {slides.map((_, idx) => (
          <SlideshowDot
            key={idx}
            active={index === idx}
            onClick={() => {
              setIndex(idx);
            }}
          ></SlideshowDot>
        ))}
      </div>
    </SlideshowContainer>
  );
}

export default Slideshow;
