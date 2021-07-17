import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [radioClicked, setRadioClicked] = useState("");
  const [radioStationClicked, setRadioStationClicked] = useState("");
  const [elClicked, setElClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [image, setImage] = useState("");

  const [api, setApi] = useState("");

  useEffect(() => {
    fetch("https://teclead.de/recruiting/radios")
      .then((obj) => obj.json())
      .then((data) => {
        setApi(data);
      });
  }, [setApi]);

  return (
    <ThemeContext.Provider
      value={{
        radioClicked,
        setRadioClicked,
        radioStationClicked,
        setRadioStationClicked,
        elClicked,
        setElClicked,
        currentIndex,
        setCurrentIndex,
        image,
        setImage,
        api,  //api was
        setApi //api was successfully triggered
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
