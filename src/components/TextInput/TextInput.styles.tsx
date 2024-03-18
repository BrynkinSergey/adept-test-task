import styled from "@emotion/styled";

export const TextInputRoot = styled.input({
  boxSizing: "border-box",
  width: "100%",
  height: "40px",

  borderRadius: "8px",
  border: "1px solid #D8DAE0",
  background: "$#fff",

  textAlign: "start",
  padding: "10px 12px",

  "&::WebkitOuterSpinButton, &::WebkitInnerSpinButton": {
    WebkitAppearance: "none",
    margin: "0",
  },
});
