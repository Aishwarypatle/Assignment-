import React from "react";
import styled from "styled-components";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaInfoCircle,
  FaExclamationTriangle,
  FaFileInvoiceDollar,
  FaPencilAlt,
  FaPercentage,
  FaQuestionCircle,
  FaCloudDownloadAlt,
  FaLightbulb,
  FaSolarPanel,
  FaUsers,
  FaMap,
} from "react-icons/fa";

const SidebarContainer = styled.div`
  max-width: 30vw;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

const LogoText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: #333;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Icon = styled.div`
  margin-right: 15px;
`;

const Text = styled.div`
  font-size: 14px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <LogoImage
          src="https://www.torrentpower.com/images/logo.png"
          alt="Torrent Power Logo"
        />
      </Logo>
      <MenuItem>
        <Icon>🏠</Icon>
        <Text>Our purpose</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaMoneyBillWave />
        </Icon>
        <Text>Payment options</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaChartLine />
        </Icon>
        <Text>My consumption</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaInfoCircle />
        </Icon>
        <Text>Tips & Information</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaExclamationTriangle />
        </Icon>
        <Text>Report theft</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaFileInvoiceDollar />
        </Icon>
        <Text>Claim compensation</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaPencilAlt />
        </Icon>
        <Text>Update information</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaPercentage />
        </Icon>
        <Text>TDS declaration</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaQuestionCircle />
        </Icon>
        <Text>FAQ & Feedback</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaCloudDownloadAlt />
        </Icon>
        <Text>Download</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaLightbulb />
        </Icon>
        <Text>Save energy</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaSolarPanel />
        </Icon>
        <Text>Solar guide</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaUsers />
        </Icon>
        <Text>About us</Text>
      </MenuItem>
      <MenuItem>
        <Icon>
          <FaMap />
        </Icon>
        <Text>Site map</Text>
      </MenuItem>
    </SidebarContainer>

  );
};

export default Sidebar;
