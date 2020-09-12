import React from "react";

import { Container } from "./styles";
import { StormPiece as IStormPiece } from "@prisma/client";

interface Props {
  data: IStormPiece;
}

const StormPiece: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <h1>{JSON.stringify(data)}</h1>
    </Container>
  );
};

export default StormPiece;
