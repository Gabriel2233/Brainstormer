import React from "react";

import { Card } from "./styles";

interface Props {
  cardTitle: string;
  cardContent: string;
  children: React.ReactNode;
}

const HomeCard: React.FC<Props> = ({ children, cardTitle, cardContent }) => {
  console.log(cardContent);

  return (
    <Card>
      {children}
      <h3>{cardTitle}</h3>
      <p>{cardContent}</p>
    </Card>
  );
};

export default HomeCard;
