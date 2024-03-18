import styled from "@emotion/styled";

export const TableRowRoot = styled.div<{ selected: boolean }>(
  ({ selected }) => ({
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "inherit",
    display: "flex",
    padding: "4px 8px 4px 0",
    borderBottom: "1px solid lightgrey",
    alignItems: "center",
    gap: "4px",

    ...(selected && {
      backgroundColor: "#F8F8FA",
      color: "#BD68CA",
    }),
  })
);

export const TableCell = styled.div({
  display: "flex",
  width: "33%",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
