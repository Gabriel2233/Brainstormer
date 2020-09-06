import React from "react";
import { FiPlus } from "react-icons/fi";
import { Container, CreateButton } from "../styles/UserDashboardStyles";
import Header from "../components/Header";
import { ProtectRoute } from "../utils/ProtectedRoute";

const UserDashboard: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <CreateButton>
        <FiPlus size={24} color="var(--main-white)" />
      </CreateButton>
    </Container>
  );
};

export default ProtectRoute(UserDashboard);
