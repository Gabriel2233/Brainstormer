import React, { useState, useEffect } from "react";
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
import useFormatDate from "../../hooks/useFormatDate";
import { mutate } from "swr";

interface Props {
  brainstormData: Brainstorm;
}

const UserBrainstormCard: React.FC<Props> = ({ brainstormData }) => {
  if (!brainstormData) return <h1>Loading...</h1>;

  const [active, setActive] = useState(brainstormData.active);

  const formatedDate = useFormatDate(
    (brainstormData.createdAt as unknown) as string
  );

  async function handleToggleActive() {
    setActive(!active);

    try {
      const body = {
        active,
        brtId: brainstormData.id,
      };

      const res = await fetch("/api/brainstorm/update", {
        method: "PUT",
        body: JSON.stringify(body),
      });

      mutate("/api/brainstorm/user-brainstorms");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <Container>
      <BrainstormInfo>
        <p>Brainstorm</p>
        <p>{formatedDate}</p>
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
            onChange={handleToggleActive}
            checked={brainstormData.active}
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
          <p>
            {brainstormData.stormPieces.length}
            {` `}Stormpieces
          </p>
        </StormPieces>
      </Active>
    </Container>
  );
};

export default UserBrainstormCard;
