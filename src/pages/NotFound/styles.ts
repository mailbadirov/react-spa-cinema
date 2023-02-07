import { styled } from "@mui/system";

export const NotFountSection = styled("section")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",

  "*": {
    margin: 5,
  },

  button: {
    minWidth: 150,
  },
});
