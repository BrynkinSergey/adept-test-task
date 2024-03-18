import styled from "@emotion/styled";

export const TableRoot = styled.div({
  width: "100%",
  maxWidth: "430px",
  display: "flex",
  flexDirection: "column",
});

export const TableContent = styled.div({
  width: "100%",
  maxWidth: "inherit",
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  overflowY: "scroll",
  "&::WebkitScrollbar": {
    display: "none",
  },
  MsOverflowStyle: "none",
  scrollbarWidth: "none",
});

export const TableActions = styled.div({
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  gap: "16px",
  padding: "20px 20px 8px",
});

export const TableHeader = styled.div({
  display: "flex",

  boxSizing: "border-box",
  width: "100%",
  maxWidth: "inherit",
  height: "44px",
  paddingRight: "8px",
  alignItems: "center",

  fontSize: "14px",
  lineHeight: "24px",
  fontWeight: "500",
  color: "#737680",

  borderBottom: "1px solid #EBECEF",
  borderTop: "1px solid #EBECEF",
  backgroundColor: "#F8F8FA",
});

export const TableHeaderSection = styled.div({
  display: "flex",
  width: "100%",
});
