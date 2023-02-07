import { keyframes, styled } from "@mui/system";

import { colors } from "app/theme";

const spinKeyframe = keyframes`
  0%,
  100% {
    box-shadow: 0.2em 0px 0 0px currentcolor;
  }

  12% {
    box-shadow: 0.2em 0.2em 0 0 currentcolor;
  }

  25% {
    box-shadow: 0 0.2em 0 0px currentcolor;
  }

  37% {
    box-shadow: -0.2em 0.2em 0 0 currentcolor;
  }

  50% {
    box-shadow: -0.2em 0 0 0 currentcolor;
  }

  62% {
    box-shadow: -0.2em -0.2em 0 0 currentcolor;
  }

  75% {
    box-shadow: 0px -0.2em 0 0 currentcolor;
  }

  87% {
    box-shadow: 0.2em -0.2em 0 0 currentcolor;
  }
`;

export const Loader = styled("span")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) rotateZ(45deg)",
  perspective: 1000,
  width: 96,
  height: 96,

  ":before, :after": {
    content: "''",
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    width: "inherit",
    height: "inherit",
    borderRadius: "50%",
    transform: "rotateX(70deg)",
    animation: `${spinKeyframe} 1s linear infinite`,
  },

  ":after": {
    color: colors.razzmatazz,
    transform: "rotateY(70deg)",
    animationDelay: "0.4s",
  },
});

export const LoadingErrorMessage = styled("div")({
  position: "absolute",
  padding: "0 10px",
  top: "50%",
  transform: "translateY(-50%)",
});
