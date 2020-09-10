import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  Container,
  CreateButton,
  UserWrapper,
  IconWrapper,
  MyBrainstormsContainer,
} from "../styles/UserDashboardStyles";
import Header from "../components/Header";
import { ProtectRoute } from "../utils/ProtectedRoute";
import UserInfoModal from "../components/UserInfoModal";
import Link from "next/link";
import SWR from "swr";
import UserBrainstormCard from "../components/UserBrainstormCard";

interface StormPiece {
  brainstormId: number;
  likes: number;
  idea: string;
}

export interface Brainstorm {
  title: string;
  authorId: number;
  createdAt: string;
  id: number;
  active: boolean;
  stormPieces: StormPiece[];
  likes: number;
}

interface ApiResponse {
  myBrainstorms: Brainstorm[];
}

const fetcher = async (route: string) => {
  const res = await fetch(route);
  const data = await res.json();

  return data;
};

const UserDashboard: React.FC = () => {
  const [userModalActive, setUserModalActive] = useState<boolean>(false);

  function toggleModal() {
    setUserModalActive(!userModalActive);
  }

  const { data, error } = SWR<ApiResponse>(
    "/api/brainstorm/mybrainstorms",
    fetcher
  );

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container onClick={!userModalActive ? null : toggleModal}>
      <Header>
        <UserWrapper onClick={toggleModal}>
          <IconWrapper>
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
        {data.myBrainstorms.map((brainstorm: Brainstorm) => (
          <Link key={brainstorm.id} href={`/brainstorm/${brainstorm.id}`}>
            <div>
              <UserBrainstormCard brainstormData={brainstorm} />
            </div>
          </Link>
        ))}
      </MyBrainstormsContainer>

      {userModalActive && <UserInfoModal />}
    </Container>
  );
};

export default ProtectRoute(UserDashboard);
