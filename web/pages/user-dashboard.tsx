import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  Container,
  Explore,
  CreateButton,
  UserWrapper,
  IconWrapper,
  MyBrainstormsContainer,
  NoBrtContainer,
  NoBrainstormCreated,
} from "../styles/UserDashboardStyles";
import Header from "../components/Header";
import { ProtectRoute } from "../utils/ProtectedRoute";
import UserInfoModal from "../components/UserInfoModal";
import Link from "next/link";
import SWR, { mutate } from "swr";
import UserBrainstormCard from "../components/DashboardBrtCard";
import { GiBrain } from "react-icons/gi";

export interface StormPiece {
  id: number;
  brainstormId: number;
  stars: number;
  idea: string;
}

export interface Brainstorm {
  title: string;
  authorId: number;
  author: { email: string };
  createdAt: Date;
  id: number;
  active: boolean;
  stormPieces: StormPiece[];
}

const fetcher = async (route: string) => {
  const res = await fetch(route);
  const data: { response: Brainstorm[] } = await res.json();

  return data;
};

const UserDashboard: React.FC = () => {
  const [userModalActive, setUserModalActive] = useState<boolean>(false);

  const { data, error } = SWR("/api/brainstorm/user-brainstorms", fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  function toggleModal() {
    setUserModalActive(!userModalActive);
  }

  return (
    <Container onClick={!userModalActive ? null : toggleModal}>
      <Header>
        <UserWrapper>
          <Link href="/explore">
            <Explore>Explore</Explore>
          </Link>
          <IconWrapper onClick={toggleModal}>
            <FaUserAstronaut color="var(--secondary-black)" size={24} />
          </IconWrapper>
          <RiArrowDownSLine color="var(--main-black)" size={24} />
        </UserWrapper>
      </Header>

      <Link href="/create-brainstorm">
        <CreateButton>
          <FiPlus size={24} color="var(--main-white)" />
        </CreateButton>
      </Link>

      <MyBrainstormsContainer>
        {data.response.length === 0 ? (
          <NoBrtContainer>
            <NoBrainstormCreated>
              <GiBrain size={56} color="var(--secondary-black)" />

              <h2>
                You haven't got any brainstorms...
                <br /> Start creating now!
              </h2>
            </NoBrainstormCreated>
          </NoBrtContainer>
        ) : (
          data.response.map((brainstorm: Brainstorm) => (
            <Link key={brainstorm.id} href={`/brainstorm/${brainstorm.id}`}>
              <div>
                <UserBrainstormCard brainstormData={brainstorm} />
              </div>
            </Link>
          ))
        )}
      </MyBrainstormsContainer>

      {userModalActive && <UserInfoModal />}
      {error && <span>An error ocurred</span>}
    </Container>
  );
};

export default ProtectRoute(UserDashboard);
