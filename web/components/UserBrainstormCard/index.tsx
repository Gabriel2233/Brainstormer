import React, { useState } from "react";
import Switch from "react-switch";
import {
  Container,
  BrainstormInfo,
  BrainstormTitle,
  Active,
  Group,
  StormPieces,
} from "./styles";
import { Brainstorm } from "../../pages/user-dashboard";

interface Props {
  brainstormData: Brainstorm;
}

const UserBrainstormCard: React.FC<Props> = ({ brainstormData }) => {
  const [checked, setChecked] = useState(true);

  return (
    <Container>
      <BrainstormInfo>
        <p>Brainstorm</p>
        <p>6h ago</p>
      </BrainstormInfo>

      <BrainstormTitle>
        <h3>{brainstormData.title}</h3>
      </BrainstormTitle>

      <Active>
        <Group>
          <p>Active:</p>
          <Switch
            offHandleColor="#eee"
            onHandleColor="#eee"
            draggable={false}
            onChange={() => setChecked(!checked)}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={30}
            handleDiameter={20}
            offColor="#f13030"
            onColor="#2dea8f"
          />
        </Group>

        <StormPieces>
          {brainstormData.stormPieces.length} Stormpieces •{" "}
          {brainstormData.likes} Likes
        </StormPieces>
      </Active>
    </Container>
  );
};

export default UserBrainstormCard;
