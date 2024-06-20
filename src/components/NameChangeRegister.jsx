// NameChangeRegister.js File
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PaymentFAQs from "app/views/pages/PayNow/PaymentFAQs";
import PaymentProcedure from "app/views/pages/PayNow/PaymentProcedure";
import styled, { ThemeProvider } from "styled-components";
import DocumentList from "../DocumentList";
import { Dashboard, ExpandLess, ExpandMore } from "@mui/icons-material";
import ConfirmationModal from "../../../common/ConfirmationModal";
import { APIbackend } from "../../../../APIbackendurl";

import { setDefaultOptions } from "date-fns";
import { FileUploadContext } from "../../../contexts/FileUploadContext";
// import {
//   cityNames,
//   cityLanguageMap,
//   languageNames,
// } from "../../../citiesConfig";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "app/components";
import MainContainerData from "./MainContainerData";

const Container = styled("div")(({ theme }) => ({
  margin: "20px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const theme = {
  breakpoints: {
    down: (key) => `@media (max-width: ${key}px)`,
  },
};

const NameChangeRegister = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { APIbackendURl, dispatchAPIbackendUrl } = useContext(APIbackend);
  const { basePointUrls } = APIbackendURl;
  const baseURL4 = basePointUrls[3004];
  const baseURL6 = basePointUrls[3006];
  const baseURL7 = basePointUrls[3007];
  const [userData, setUserData] = useState({});
  const { uploadedFiles, saveFile, uploadedFileURLs, saveFileURL, removeFile } =
    useContext(FileUploadContext);
  const [city, setCity] = useState(localStorage.getItem("selectedCity") || "");
  const [idProofOptions, setIdProofOptions] = useState([]);
  const [ownershipOptions, setOwnershipOptions] = useState([]);
  const [supportingDocsOptions, setSupportingDocsOptions] = useState([]);
  const [jointOwners, setJointOwners] = useState([]);
  const [titles, setTitles] = useState([]);
  const [filesData, setFilesData] = useState([]); // Store file data temporarily
  const navigate = useNavigate();
  const [newName, setNewName] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleDrop = (event, type) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.size <= 300 * 1024) {
      // Check file size (max 300kb)
      const fileURL = URL.createObjectURL(file);
      saveFile(file, type);
      saveFileURL(fileURL, type);
    } else {
      alert("File size exceeds the 300kb limit");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const removeUploadedFile = (type) => {
    removeFile(type);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${baseURL4}/api/v1/user/viewData`, {
          flag: true,
          city: localStorage.getItem("selectedCity"),
          serviceNo: sessionStorage.getItem("serviceNo"),
        });
        setUserData(response.data[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await axios.post(
          `${baseURL4}/api/v1/user/dynamicQuery`,
          {
            city,
            condition: 'CD_SRLNO=14 and CD_ACTIVE="Y"',
            fields: "code_no,CD_DESC",
          }
        );
        setTitles(response.data);
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };
    fetchTitles();
  }, [city]);

  useEffect(() => {
    const fetchIdProofOptions = async () => {
      if (
        city !== "DNH" &&
        city !== "SMK" &&
        city !== "DDM" &&
        city !== "BHW"
      ) {
        try {
          const response = await axios.post(
            `${baseURL4}/api/v1/user/dynamicQuery`,
            {
              city,
              condition: `CD_ACODE in ("Z00520","Z00350","Z00340","Z00550","Z00782","Z00802","Z00817") and CD_ACTIVE="Y"`,
              fields: "CD_ACODE,CD_DESC",
            }
          );
          setIdProofOptions(
            response.data.map((option) => ({
              value: option.CD_ACODE,
              label: option.CD_SHRTDESC,
            }))
          );
        } catch (error) {
          console.error("Error fetching ID proof options:", error);
        }
      } else if (city === "DDM" || city === "DNH") {
        try {
          const response = await axios.post(
            `${baseURL4}/api/v1/user/dynamicQuery`,
            {
              city,
              condition:
                'CD_ACODE in ("Z00742","Z00887","Z00520","Z00350","Z00340","Z00550","Z00782","Z00802","Z00817")',
              fields: "CD_ACODE,CD_DESC",
            }
          );
          setIdProofOptions(
            response.data.map((option) => ({
              value: option.CD_ACODE,
              label: option.CD_SHRTDESC,
            }))
          );
        } catch (error) {
          console.error("Error fetching ID proof options:", error);
        }
      } else if (city === "BHW" || city === "SMK") {
        try {
          const response = await axios.post(
            `${baseURL4}/api/v1/user/dynamicQuery`,
            {
              city,
              condition: `CD_ACTIVE="Y"`,
              fields: "CD_ACODE,CD_DESC",
            }
          );
          setIdProofOptions(
            response.data.map((option) => ({
              value: option.CD_ACODE,
              label: option.CD_SHRTDESC,
            }))
          );
        } catch (error) {
          console.error("Error fetching ID proof options:", error);
        }
      } else {
        setIdProofOptions([]);
      }
    };
    fetchIdProofOptions();
  }, [city]);

  //
  useEffect(() => {
    const fetchOwnershipOptions = async () => {
      if (
        city !== "AGR" &&
        city !== "DNH" &&
        city !== "SMK" &&
        city !== "DDM" &&
        city !== "BHW"
      ) {
        try {
          const response = await axios.post(
            `${baseURL4}/api/v1/user/dynamicQuery`,
            {
              city,
              condition: "code_no in (72,84,122,138,136,5282)",
              fields: "CD_ACODE,CD_DESC",
            }
          );
          setOwnershipOptions(
            response.data.map((option) => ({
              value: option.CD_ACODE,
              label: option.CD_SHRTDESC,
            }))
          );
        } catch (error) {
          console.error("Error fetching ownership document options:", error);
        }
      } else if (city === "DDM" || city === "DNH") {
        try {
          const response = await axios.post(
            `${baseURL4}/api/v1/user/dynamicQuery`,
            {
              city,
              condition: `CD_ACODE NOT IN ("Z00875","Z00876","Z00877","Z00878","Z00879","Z00880","Z00881","Z00882","Z00883","Z00884","Z00885","Z00886")`,
              fields: "CD_ACODE,CD_DESC",
            }
          );
          setOwnershipOptions(
            response.data.map((option) => ({
              value: option.CD_ACODE,
              label: option.CD_SHRTDESC,
            }))
          );
        } catch (error) {
          console.error("Error fetching ID proof options:", error);
        }
        // } else if (city === 'BHW' || city === 'SMK') {
      } else if (city === "BHW") {
        try {
          const response = await axios.post(
            `${baseURL4}/api/v1/user/dynamicQuery`,
            {
              city,
              condition: `'CD_SRLNO' => array('16'),'CD_GCODE' => array('OWNERSHIP')`,
              fields: "CD_ACODE,CD_DESC",
            }
          );
          setOwnershipOptions(
            response.data.map((option) => ({
              value: option.CD_ACODE,
              label: option.CD_SHRTDESC,
            }))
          );
        } catch (error) {
          console.error("Error fetching ID proof options:", error);
        }
      } else if (city === "AGR") {
        try {
          const response = await axios.post(
            `${baseURL4}/api/v1/user/dynamicQuery`,
            {
              city,
              condition: `CD_ACODE in ("Z00650","Z00690","Z00290","Z00742") and CD_ACTIVE="Y"`,
              fields: "CD_ACODE,CD_DESC",
            }
          );
          setOwnershipOptions(
            response.data.map((option) => ({
              value: option.CD_ACODE,
              label: option.CD_SHRTDESC,
            }))
          );
        } catch (error) {
          console.error("Error fetching ID proof options:", error);
        }
      } else {
        setOwnershipOptions([]);
      }
    };
    fetchOwnershipOptions();
  }, [city]);

  useEffect(() => {
    const fetchSupportingDocsOptions = async () => {
      try {
        const response = await axios.post(
          `${baseURL4}/api/v1/user/dynamicQuery`,
          {
            city,
            condition:
              "CD_ACODE IN ('Z00310','Z00420','Z00785','Z00500','Z00757','Z00830') AND CD_ACTIVE='Y'",
            fields: "CD_ACODE,CD_DESC",
          }
        );
        setSupportingDocsOptions(
          response.data.map((option) => ({
            value: option.CD_ACODE,
            label: option.CD_SHRTDESC,
          }))
        );
      } catch (error) {
        console.error("Error fetching supporting document options:", error);
      }
    };
    fetchSupportingDocsOptions();
  }, [city]);

  const handleStatusChange = (index) => {
    setSelectedStatus(legalStatuses[index].value);
  };

  const saveApplication = () => {
    ConfirmDetails();

    const city = localStorage.getItem("selectedCity");
    const serviceNo = sessionStorage.getItem("serviceNo");

    const data = {
      city: city,
      existingName: userData.name,
      jointOwner1: jointOwners[0] ? jointOwners[0].name : "1",
      jointOwner2: jointOwners[1] ? jointOwners[1].name : "2",
      jointOwner3: jointOwners[2] ? jointOwners[2].name : "3",
      newName: newName,
      relation: selectedStatus,
      serviceNo: serviceNo,
      title: selectedTitle,
      type: "namechange",
    };

    axios
      .post(`${baseURL6}/application/applicationRegistration`, data)
      .then((response) => {
        console.log("Response:", response.data);
        const requestNo = response.data.id;

        // Prepare filesData with the payload for the reqdocs API
        const reqDocsPayload = filesData.map((file) => ({
          ...file,
          requestNo: requestNo, // dynamically setting requestNo
        }));

        // Send filesData to the reqdocs API endpoint
        axios
          .post(`${baseURL6}/application/reqdocs`, reqDocsPayload)
          .then((response) => {
            console.log(
              "Files uploaded successfully for reqdocs",
              response.data
            );
            // Clear filesData after successful upload
            setFilesData([]);
          })
          .catch((error) => {
            console.error("Error uploading files for reqdocs:", error);
          });

        // Prepare filesData with the payload for the bulkdata API
        const bulkDataPayload = filesData.map((file) => ({
          base64data: file.base64data,
          city: city,
          filetype: file.filetype,
          name: file.name,
          serviceNo: serviceNo,
          type: "theft",
        }));

        // Send filesData with the bulkdata payload to the bulkdata API endpoint
        axios
          .post(
            `${baseURL7}/customerService/uploadsftpdecodeBulkData`,
            bulkDataPayload
          )
          .then((response) => {
            console.log(
              "Files uploaded successfully for bulkdata",
              response.data
            );
            // Clear filesData after successful upload
            setFilesData([]);
          })
          .catch((error) => {
            console.error("Error uploading files for bulkdata:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleFileUpload = async (event, type, index) => {
    const file = event.target.files[0];
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg"];

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF, JPG, and JPEG files are allowed.");
      return;
    }

    // Check file size (max 10 MB)
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds the 10 MB limit");
      return;
    }

    const base64 = await convertToBase64(file);
    let docId;

    if (type === "photoid") {
      docId = "T99005";
    } else if (type === "signature_existing") {
      docId = "T99002";
    } else if (type === "signature_new") {
      docId = "T99003";
    } else if (type === "signature_joint") {
      docId = `T9900${index + 6}`; // Assuming index starts from 0
    } else {
      docId = "Z99001"; // Default value
    }

    // Store file data temporarily
    setFilesData((prevData) => [
      ...prevData,
      {
        base64data: base64,
        city: city,
        docId: docId,
        docName: file.name,
        fileType: file.type,
        path: file.name,
        type: "theft",
      },
    ]);

    const fileURL = URL.createObjectURL(file);
    saveFile(file, type);
    saveFileURL(fileURL, type);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleSaveNext = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    // Your save logic here
    console.log("Saved and proceeded to the next step");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    console.log("Cancelled save and next");
  };

  // const handleStatusChange = (index) => {
  //   setSelectedStatus(index);
  // };

  const ConfirmDetails = () => {
    navigate("/application/namechangeconfirmdetails");
  };

  // const legalStatuses = [
  //   { name: "Tenant" },
  //   { name: "Owner" },
  //   { name: "Legal Occupier" },
  // ];

  const legalStatuses = [
    { value: 43, name: "Owner" },
    { value: 42, name: "Tenant" },
    { value: 46, name: "Legal Occupier" },
  ];

  const handleSupportingDocChange = (index, value) => {
    const updatedJointOwners = [...jointOwners];
    updatedJointOwners[index].supportingDoc = value;
    setJointOwners(updatedJointOwners);
  };

  const addJointOwner = () => {
    const newJointOwners = [
      ...jointOwners,
      { title: "", name: "", signature: "", aadhar: "", supportingDoc: "" },
    ];
    setJointOwners(newJointOwners);
  };

  const removeJointOwner = (index) => {
    const updatedJointOwners = [...jointOwners];
    updatedJointOwners.splice(index, 1);
    setJointOwners(updatedJointOwners);
  };

  const handleTitleChange = (index, value) => {
    const updatedJointOwners = [...jointOwners];
    updatedJointOwners[index].title = value;
    setJointOwners(updatedJointOwners);
  };

  const handleNameChange = (index, value) => {
    const updatedJointOwners = [...jointOwners];
    updatedJointOwners[index].name = value;
    setJointOwners(updatedJointOwners);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="breadcrumb">
          <Breadcrumb
            routeSegments={[
              { name: "Home", path: "/" },
              { name: "Application" },
            ]}
          />
        </div>
        <MainContainerData
          userData={userData}
          uploadedFiles={uploadedFiles}
          uploadedFileURLs={uploadedFileURLs}
          removeUploadedFile={removeUploadedFile}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          legalStatuses={legalStatuses}
          handleStatusChange={handleStatusChange}
          selectedTitle={selectedTitle}
          setSelectedTitle={setSelectedTitle}
          titles={titles}
          newName={newName}
          setNewName={setNewName}
          handleFileUpload={handleFileUpload}
          jointOwners={jointOwners}
          removeJointOwner={removeJointOwner}
          supportingDocsOptions={supportingDocsOptions}
          addJointOwner={addJointOwner}
          toggleAccordion={toggleAccordion}
          isOpen={isOpen}
          idProofOptions={idProofOptions}
          ownershipOptions={ownershipOptions}
          setUserData={setUserData}
        />

        {isModalOpen && (
          <ConfirmationModal
            message="Do you want to save this application as draft so you can continue later?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};
export default NameChangeRegister;
