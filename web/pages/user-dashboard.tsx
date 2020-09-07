import React, { useState } from "react";
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

const UserDashboard: React.FC = () => {
  const [userModalActive, setUserModalActive] = useState<boolean>(false);

  function toggleModal() {
    setUserModalActive(!userModalActive);
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

      <MyBrainstormsContainer></MyBrainstormsContainer>

      {userModalActive && <UserInfoModal />}
    </Container>
  );
};

export default ProtectRoute(UserDashboard);
