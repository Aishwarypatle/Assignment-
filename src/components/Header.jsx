import React from "react";
import styled from "styled-components";
import {
  FaHome,
  FaMoneyBillWave,
  FaFileAlt,
  FaExclamationTriangle,
  FaRegFileAlt,
  FaShieldAlt,
  FaRegClock,
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  color: #333;
  transition: color 0.3s;
  &:hover {
    color: #007bff;
  }
`;

const Icon = styled.div`
  margin-right: 8px;
`;

const Text = styled.div`
  font-size: 14px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavItem>
        <Icon>
          <FaHome />
        </Icon>
        <Text>Home</Text>
      </NavItem>
      <NavItem>
        <Icon>
          <FaMoneyBillWave />
        </Icon>
        <Text>Pay now</Text>
      </NavItem>
      <NavItem>
        <Icon>
          <FaFileAlt />
        </Icon>
        <Text>Application</Text>
      </NavItem>
      <NavItem>
        <Icon>
          <FaExclamationTriangle />
        </Icon>
        <Text>Complaints</Text>
      </NavItem>
      <NavItem>
        <Icon>
          <FaRegFileAlt />
        </Icon>
        <Text>Statement of account</Text>
      </NavItem>
      <NavItem>
        <Icon>
          <FaShieldAlt />
        </Icon>
        <Text>Outage checker</Text>
      </NavItem>
      <NavItem>
        <Icon>
          <FaRegClock />
        </Icon>
        <Text>Meter reading</Text>
      </NavItem>
      <Spacer />
      <NavItem>
        <Icon>
          <FaSearch />
        </Icon>
      </NavItem>
      <NavItem>
        <Icon>
          <FaBell />
        </Icon>
      </NavItem>
      <NavItem>
        <Icon>
          <FaUserCircle />
        </Icon>
      </NavItem>
    </HeaderContainer>
  );
};

export default Header;
