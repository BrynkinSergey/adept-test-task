import styled from "@emotion/styled";

export const ButtonRoot = styled.button<{ variant?: "contained" | "outlined" }>(
  ({ variant = "contained" }) => ({
    borderRadius: "8px",
    display: "flex",
    padding: "8px 20px",
    fontWeight: 500,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    ...(variant === "contained" && {
      backgroundColor: "#C06ECC",
      border: "1px solid #BD68CA",
      color: "#fff",

      "&:hover": {
        backgroundColor: "#BD68CA",
        cursor: "pointer",
      },

      "&:active": {
        backgroundColor: "#B068CA",
      },

      "&:disabled": {
        backgroundColor: "#ca9ed9",
        borderColor: "#ca9ed9",
      },
    }),

    ...(variant === "outlined" && {
      backgroundColor: "#FFF",
      border: "1px solid #D0D3DA",
      color: "#37393D",

      "&:hover": {
        backgroundColor: "#F8F8FA",
        cursor: "pointer",
      },

      "&:active": {
        backgroundColor: "#EBECEF",
      },
    }),
  })
);
