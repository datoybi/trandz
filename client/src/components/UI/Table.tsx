import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { TableProp } from "../../types/types";

const Table = ({ className, children }: TableProp) => {
  const cssClass = className;
  return (
    <Wrapper>
      <TableInner
        css={css`
          ${cssClass};
        `}
      >
        {children}
      </TableInner>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
`;

const TableInner = styled.table`
  width: 100%;
  height: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-style: hidden;
  text-align: left;

  & th,
  td {
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
