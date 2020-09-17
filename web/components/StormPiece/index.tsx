import React, { FormEvent, useState } from "react";
import { Container, LikeButton, Footer } from "./styles";
import { StormPiece as IStormPiece } from "../../pages/user-dashboard";
import { FiStar } from "react-icons/fi";

interface Props {
  data: IStormPiece;
}

const StormPiece: React.FC<Props> = ({ data }) => {

  return (
    <Container>
      <LikeButton>
        <FiStar size={22} color="yellow" />
        <p>{data.stars}</p>
      </LikeButton>
      <h1>{data.idea}</h1>

      <Footer>
        <p>Made 6 min ago</p>
      </Footer>
    </Container>
  );
};

export default StormPiece;
