import React, { useContext } from "react";
import RadioClicked from "./RadioClicked";
import { ThemeContext } from "./ThemeContext";


function MainBody() {
  const {
    setRadioClicked,
    elClicked,
    setRadioStationClicked,
    setElClicked,
    setImage,
    currentIndex,
    setCurrentIndex,
    api
  } = useContext(ThemeContext);

  function clickHandler(el, index) {
    let image = el.image;
    let ind = image.search("Radio");
    let number = ["One", "Two", "Three", "Four"];
    let imageNew = image.slice(0, ind + 5) + number[index];

    setElClicked(true);
    setCurrentIndex(index);
    setImage(imageNew);
    setRadioClicked(el.name);
    setRadioStationClicked(true);
  }

  return (
    <div className='main-body'>
      {api &&
        api.radios.map((el, index) => (
          <div
            key={index}
            className='main-body__radio'
            onClick={() => {
              clickHandler(el, index)
            }}
          >
            <div
              className={`${elClicked ? "flexColumn" : ""} main-body__radio`}
            >
              <div style={{ position: "relative" }}>
                {elClicked && index === currentIndex ? (
                  <RadioClicked index={index} />
                ) : (
                  ""
                )}
              </div>
              <div className='main-body__radio__field'>
                <div>{el.name}</div> <div>{el.frequency}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MainBody;
