import React from "react";
import { RowStyle } from "./style";

interface Props {
  children: React.ReactNode;
}

const Row = (props: Props) => <RowStyle>{props.children}</RowStyle>;

export default Row;
