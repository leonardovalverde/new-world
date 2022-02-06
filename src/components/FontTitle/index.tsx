import React from "react";
import * as Styled from "./styled";
import { TitleProps } from "./types";

const FontTitle: React.FC<TitleProps> = ({ title }) => {
  return <Styled.MainTitle>{title}</Styled.MainTitle>;
};

export default FontTitle;
