import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const Table = ({ className, children }) => {
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

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Table.defaultProps = {
  className: "",
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
