import styled from "@emotion/styled";

export const CheckboxRoot = styled.div<{ isSomeChecked: boolean }>(
  ({ isSomeChecked }) => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& input[type=checkbox]": {
      WebkitAppearance: "none",
      appearance: "none",

      width: "16px",
      height: "16px",
      borderRadius: "2px",
      border: "1px solid #D0D3DA",
      backgroundColor: "#fff",
      outline: "none",
      cursor: "pointer",
    },

    "& input[type=checkbox]:checked": {
      border: "0",
      backgroundImage: "url(./icons/check.svg)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
    ...(isSomeChecked && {
      "input[type=checkbox]": {
        backgroundImage: "linear-gradient(to right, #D0D3DA, #D0D3DA)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "80% 2px",
        backgroundPosition: "center center",
      },
    }),
  })
);
