import React from "react";
import * as Styled from "./styles";
import { SmokeProps } from "./types";

const SmokeFx: React.FC<SmokeProps> = ({ children }: SmokeProps) => {
  return <section>{children}</section>;
};

export default SmokeFx;
