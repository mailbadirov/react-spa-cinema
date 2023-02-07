import { useState } from "react";

import NavigationIcon from "@mui/icons-material/Navigation";

import { ScrollButton } from "./styles";

const ScrollToTop = () => {
  const [isShown, setIsShown] = useState(false);

  window.addEventListener("scroll", () =>
    setIsShown(window.scrollY > 200)
  );

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isShown) {
    return null;
  }

  return (
    <ScrollButton onClick={scroll}>
      <NavigationIcon />
    </ScrollButton>
  );
};

export default ScrollToTop;
