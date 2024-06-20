import React from "react";
import { Input, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ViewLoad from "./ViewLoad";
import styled from "styled-components";
import DocumentList from "./DocumentList";
import { Dashboard, ExpandLess, ExpandMore } from "@mui/icons-material";

const MainContainerData = ({
  uploadedFiles,
  uploadedFileURLs,
  userData,
  removeUploadedFile,
  handleDrop,
  handleDragOver,
  legalStatuses,
  handleStatusChange,
  selectedTitle,
  setSelectedTitle,
  titles,
  newName,
  setNewName,
  handleFileUpload,
  jointOwners,
  removeJointOwner,
  supportingDocsOptions,
  addJointOwner,
  toggleAccordion,
  isOpen,
  idProofOptions,
  ownershipOptions,
  setUserData,
  selectedStatus,
  handleSaveNext,
  saveApplication,
}) => {
  return (
    <MainContainer>
      <MainContent>
        <MainContentWrapper>
          <MainColumn>
            <MainColumnContent>
              {/* <Header> */}
              <HeaderContent>
                <PageTitle>
                  <PageTitleText>Application</PageTitleText>
                  <ServiceNumber>
                    <ServiceNumberBg>
                      <ServiceNumberIcon
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ceb6176313e6bdcfe91c62c540766061586444b2a8381ddd08286d39b96ae0?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                      />
                      <span
                        className="service-number-bold"
                        style={{
                          whiteSpace: "nowrap",
                          zIndex: 1,
                          fontSize: "14px",
                        }}>
                        {/* Service no - {userData.serviceNo} */}
                        Service no - 33456
                      </span>
                    </ServiceNumberBg>
                  </ServiceNumber>
                </PageTitle>
                <Actions>
                  <ActionButton>Book video call appointment</ActionButton>
{/* 
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <ActionButton
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasProcedure"
                      aria-controls="offcanvasProcedure"
                      style={{ marginRight: "10px" }}>
                      View Load
                    </ActionButton>
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex="-1"
                      id="offcanvasProcedure"
                      aria-labelledby="offcanvasProcedureLabel">
                      <div className="offcanvas-header">
                        <h5 id="offcanvasProcedureLabel">View Load</h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"></button>
                      </div>
                      <div className="offcanvas-body">
                        <ViewLoad />
                      </div>
                    </div>
                    <ActionButton
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasFAQs"
                      aria-controls="offcanvasFAQs">
                      Document list
                    </ActionButton>
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex="-1"
                      id="offcanvasFAQs"
                      aria-labelledby="offcanvasFAQsLabel">
                      <div className="offcanvas-header">
                        <h5 id="offcanvasFAQsLabel">Document list </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"></button>
                      </div>
                      <div className="offcanvas-body">
                        <DocumentList />
                      </div>
                    </div>
                  </div> */}
                  <ActionButton>View load</ActionButton>
                  <ActionButton>Document list</ActionButton>
                </Actions>
              </HeaderContent>
              <FormSection>
                <FormWrapper>
                  <StepsColumn>
                    <StepsCard>
                      <StepsWrapper>
                        <StepItem>
                          <StepCircle>
                            <StepCircleInner />
                          </StepCircle>
                          <StepContent>
                            <StepNumber>Step 1</StepNumber>
                            <StepTitle>Customer info</StepTitle>
                          </StepContent>
                        </StepItem>
                        <StepConnector
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3905fe385a3a43dc558a6a56adceb229e9eb70618bc9f010103b4501ab07349c?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                        />

                      <StepItem>
                          <StepCircle>
                            <StepCircleInner />
                          </StepCircle>
                          <StepContent>
                            <StepNumber>Step 2</StepNumber>
                            <StepTitle>Verification</StepTitle>
                          </StepContent>
                        </StepItem>
                        <StepConnector
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3905fe385a3a43dc558a6a56adceb229e9eb70618bc9f010103b4501ab07349c?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                        />
                        <StepItem>
                          <StepCircle>
                            <StepCircleInner />
                          </StepCircle>
                          <StepContent>
                            <StepNumber>Step 3</StepNumber>
                            <StepTitle>Confirm details</StepTitle>
                          </StepContent>
                        </StepItem>
                      </StepsWrapper>
                    </StepsCard>
                  </StepsColumn>
                  <FormColumn>
                    <FormCard>
                      <CustomerInfoWrapper>
                        <CustomerInfoContainer>
                          {/* <SectionTitle>Customer information</SectionTitle> */}
                          <ExistingCustomerSection>
                            <SectionSubtitle>Existing customer</SectionSubtitle>
                            <ExistingCustomerContent>
                              <CustomerNameWrapper>
                                <Label>Name</Label>
                                <CustomerName>{userData.name}</CustomerName>
                              </CustomerNameWrapper>

                              <ExistingSignatureWrapper>
                                <ExistingSignatureLabel>
                                  <span>Existing customer signature</span>
                                  <SignatureIcon
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c07a6d25a4c774e04a4c87c23045d182d008be7343a81c3181d81dc1af3f1d71?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                                    alt="Signature Icon"
                                  />
                                </ExistingSignatureLabel>

                                <UploadDocument>
                                  {/* {uploadedFiles.signature_existing ? (
                                    <UploadedFileWrapper>
                                      <UploadedFileContent
                                        style={{
                                          width: "15%",
                                          height: "10%",
                                          margin: "10px",
                                        }}>
                                        <img
                                          src={
                                            uploadedFileURLs.signature_existing
                                          }
                                          alt="Uploaded File"
                                        />
                                      </UploadedFileContent>
                                      <IconButton
                                        onClick={() =>
                                          removeUploadedFile(
                                            "signature_existing"
                                          )
                                        }
                                        size="small"
                                        aria-label="remove file">
                                        <CloseIcon />
                                      </IconButton>
                                    </UploadedFileWrapper>
                                  ) : (
                                    <Dropzone
                                      onDrop={(event) =>
                                        handleDrop(event, "signature_existing")
                                      }
                                      onDragOver={handleDragOver}>
                                      <UploadIcon>
                                        <img
                                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d318989f4a0157ea3cd87b32ae36f1dbc5f5f7ce56dcd4ce7e20b841c6cdf4f?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                                          alt="Upload Icon"
                                        />
                                        <UploadText>
                                          Drag & Drop or
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                            }}>
                                            <label
                                              htmlFor="signature_existing"
                                              style={{
                                                cursor: "pointer",
                                                textDecoration: "underline",
                                                color: "#f99d1c",
                                                marginBottom: "7px",
                                              }}>
                                              Choose File
                                            </label>
                                          </div>
                                        </UploadText>
                                      </UploadIcon>
                                      <Input
                                        type="file"
                                        id="signature_existing"
                                        style={{ display: "none" }}
                                        onChange={(event) =>
                                          handleFileUpload(
                                            event,
                                            "signature_existing"
                                          )
                                        }
                                      />
                                    </Dropzone>
                                  )} */}
                                  <UploadLimit>Max 300kb</UploadLimit>
                                </UploadDocument>
                              </ExistingSignatureWrapper>
                            </ExistingCustomerContent>
                          </ExistingCustomerSection>
                          <NewCustomerSection>
                            <SectionSubtitle>New customer</SectionSubtitle>

                            <div style={{ marginTop: "20px" }}>
                              <CustomerInfoRow>
                                <CustomerInfoCol>
                                  <Label isRequired>Legal status</Label>
                                </CustomerInfoCol>
                                <CustomerInfoCol>
                                  <Label>New customer photo</Label>
                                </CustomerInfoCol>
                              </CustomerInfoRow>
                              <NewCustomerDetails>
                                <CustomerDetailsRow>
                                  <CustomerDetailsCol>
                                    <LegalStatusOptions>
                                      {legalStatuses.map((status, index) => (
                                        <LegalStatusOption key={index}>
                                          <input
                                            type="radio"
                                            id={`legalStatus${index}`}
                                            name="legalStatus"
                                            value={status.value}
                                            checked={
                                              status.value === selectedStatus
                                            }
                                            onChange={() =>
                                              handleStatusChange(index)
                                            }
                                            className="input-checkbox"
                                          />
                                          <label
                                            htmlFor={`legalStatus${index}`}
                                            className="checkbox-label">
                                            {status.name}
                                          </label>
                                        </LegalStatusOption>
                                      ))}
                                    </LegalStatusOptions>

                                    <CustomerNameInput>
                                      <Label isRequired>
                                        New customer name
                                      </Label>
                                      <CustomerNameFields>
                                        <TitleDropdown
                                          value={selectedTitle}
                                          onChange={(e) =>
                                            setSelectedTitle(e.target.value)
                                          }>
                                          <option value="" disabled>
                                            Select title
                                          </option>
                                          {titles.map((title, index) => (
                                            <option
                                              key={index}
                                              value={title.CD_ACODE}>
                                              {title.CD_SHRTDESC}
                                            </option>
                                          ))}
                                        </TitleDropdown>
                                        <CustomerNameField
                                          placeholder="Enter customer name"
                                          value={newName}
                                          onChange={(e) =>
                                            setNewName(e.target.value)
                                          }
                                        />
                                      </CustomerNameFields>
                                    </CustomerNameInput>
                                  </CustomerDetailsCol>

                                  <CustomerPhotoCol>
                                    <UploadPhoto>
                                      <UploadPhotoContent>
                                        <img
                                          style={{ marginLeft: "15px" }}
                                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/54898dce03b4c2be4e4168fd49e7519ccbf24e4c46d4e287a1b1d05812573d82?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                                          alt="Upload icon"
                                        />
                                        <>
                                          {/* {uploadedFiles.photoid ? (
                                            <UploadedFileWrapper>
                                              <UploadedFileContent>
                                                <img
                                                  src={uploadedFileURLs.photoid}
                                                  alt="Uploaded File"
                                                />
                                              </UploadedFileContent>
                                              <IconButton
                                                onClick={() =>
                                                  removeUploadedFile("photoid")
                                                }
                                                size="small"
                                                aria-label="remove file">
                                                <CloseIcon />
                                              </IconButton>
                                            </UploadedFileWrapper>
                                          ) : (
                                            <Dropzone
                                              onDrop={(event) =>
                                                handleDrop(event, "photoid")
                                              }
                                              onDragOver={handleDragOver}>
                                              <UploadIcon>
                                                <UploadPhotoText>
                                                  Drag & Drop or
                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                    }}>
                                                    <label
                                                      htmlFor="photoid"
                                                      style={{
                                                        cursor: "pointer",
                                                        textDecoration:
                                                          "underline",
                                                        color: "#f99d1c",
                                                        marginBottom: "7px",
                                                      }}>
                                                      Choose File
                                                    </label>
                                                  </div>
                                                </UploadPhotoText>
                                              </UploadIcon>
                                              <Input
                                                type="file"
                                                id="photoid"
                                                style={{ display: "none" }}
                                                onChange={(event) =>
                                                  handleFileUpload(
                                                    event,
                                                    "photoid"
                                                  )
                                                }
                                              />
                                            </Dropzone>
                                          )} */}
                                        </>
                                        <UploadLimit>Max 300kb</UploadLimit>
                                      </UploadPhotoContent>
                                    </UploadPhoto>
                                  </CustomerPhotoCol>
                                </CustomerDetailsRow>
                              </NewCustomerDetails>

                              <div>
                                <div>
                                  <VerificationContent>
                                    {jointOwners
                                      .slice(0, 3)
                                      .map((owner, index) => (
                                        <div key={index}>
                                          <CustomerNameInput1>
                                            <Label isRequired>
                                              Joint Owner {index + 1}{" "}
                                            </Label>
                                            <CustomerNameFields>
                                              <TitleDropdown
                                                value={selectedTitle}
                                                onChange={(e) =>
                                                  setSelectedTitle(
                                                    e.target.value
                                                  )
                                                }>
                                                <option value="" disabled>
                                                  Select title
                                                </option>
                                                {titles.map((title, index) => (
                                                  <option
                                                    key={index}
                                                    value={title.CD_ACODE}>
                                                    {title.CD_SHRTDESC}
                                                  </option>
                                                ))}
                                              </TitleDropdown>
                                              <CustomerNameField placeholder="Enter customer name" />
                                            </CustomerNameFields>
                                          </CustomerNameInput1>
                                          <IconButton
                                            onClick={() =>
                                              removeJointOwner(index)
                                            }>
                                            <CloseIcon />
                                          </IconButton>
                                          {/* Signature */}

                                          <SignatureVerification>
                                            <VerificationLabel>
                                              Signature
                                            </VerificationLabel>
                                            <UploadButton>
                                              <label
                                                htmlFor={`signaturejoint_${index}`}
                                                style={{
                                                  cursor: "pointer",
                                                }}>
                                                <span>Upload signature</span>
                                              </label>
                                              {/* {uploadedFiles[
                                                `signaturejoint_${index}`
                                              ] ? (
                                                <UploadedFileWrapper>
                                                  <UploadedFileContent>
                                                    <img
                                                      src={
                                                        uploadedFileURLs[
                                                          `signaturejoint_${index}`
                                                        ]
                                                      }
                                                      alt="Uploaded File"
                                                    />
                                                  </UploadedFileContent>
                                                  <IconButton
                                                    onClick={() =>
                                                      removeUploadedFile(
                                                        `signaturejoint_${index}`
                                                      )
                                                    }
                                                    size="small"
                                                    aria-label="remove file">
                                                    <CloseIcon />
                                                  </IconButton>
                                                </UploadedFileWrapper>
                                              ) : (
                                                <Dropzone
                                                  onDrop={(event) =>
                                                    handleDrop(
                                                      event,
                                                      `signaturejoint_${index}`
                                                    )
                                                  }
                                                  onDragOver={handleDragOver}>
                                                  <Input
                                                    type="file"
                                                    id={`signaturejoint_${index}`}
                                                    style={{
                                                      display: "none",
                                                    }}
                                                    onChange={(event) =>
                                                      handleFileUpload(
                                                        event,
                                                        `signaturejoint_${index}`
                                                      )
                                                    }
                                                  />
                                                </Dropzone>
                                              )} */}
                                            </UploadButton>
                                          </SignatureVerification>

                                          {/* Aadhar Verification */}
                                          <AadharVerification>
                                            <VerificationLabel>
                                              Aadhar verification
                                            </VerificationLabel>
                                            <VerifyButton>
                                              <span>Verify</span>
                                            </VerifyButton>
                                          </AadharVerification>
                                          {/* Supporting Document */}
                                          <SupportingDocument>
                                            <DocumentInputColumn>
                                              <DocumentTitle>
                                                Supporting document
                                              </DocumentTitle>
                                              <Select
                                                id={`supportingDocument_${index}`}
                                                value={
                                                  owner.supportingDoc || ""
                                                }
                                                onChange={(e) =>
                                                  handleSupportingDocChange(
                                                    index,
                                                    e.target.value
                                                  )
                                                }
                                                style={{ width: "100%" }}>
                                                <option value="">
                                                  Select document
                                                </option>
                                                {supportingDocsOptions.map(
                                                  (option) => (
                                                    <option
                                                      key={option.value}
                                                      value={option.value}>
                                                      {option.label}
                                                    </option>
                                                  )
                                                )}
                                              </Select>
                                            </DocumentInputColumn>
                                            <UploadSupportingDocument>
                                              <UploadTitle>
                                                Existing supporting document
                                              </UploadTitle>
                                              <UploadDocument>
                                                {/* {uploadedFiles[
                                                  `supporting_${index}`
                                                ] ? (
                                                  <UploadedFileWrapper>
                                                    <UploadedFileContent>
                                                      <img
                                                        src={
                                                          uploadedFileURLs[
                                                            `supporting_${index}`
                                                          ]
                                                        }
                                                        alt="Uploaded File"
                                                      />
                                                    </UploadedFileContent>
                                                    <IconButton
                                                      onClick={() =>
                                                        removeUploadedFile(
                                                          `supporting_${index}`
                                                        )
                                                      }
                                                      size="small"
                                                      aria-label="remove file">
                                                      <CloseIcon />
                                                    </IconButton>
                                                  </UploadedFileWrapper>
                                                ) : (
                                                  <Dropzone
                                                    onDrop={(event) =>
                                                      handleDrop(
                                                        event,
                                                        `supporting_${index}`
                                                      )
                                                    }
                                                    onDragOver={handleDragOver}>
                                                    <UploadIcon>
                                                      <UploadText>
                                                        Drag & Drop or
                                                        <div
                                                          style={{
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                          }}>
                                                          <label
                                                            htmlFor={`supporting_${index}`}
                                                            style={{
                                                              cursor: "pointer",
                                                              textDecoration:
                                                                "underline",
                                                              color: "#f99d1c",
                                                              marginBottom:
                                                                "7px",
                                                            }}>
                                                            Choose File
                                                          </label>
                                                        </div>
                                                      </UploadText>
                                                    </UploadIcon>
                                                    <Input
                                                      type="file"
                                                      id={`supporting_${index}`}
                                                      style={{
                                                        display: "none",
                                                      }}
                                                      onChange={(event) =>
                                                        handleFileUpload(
                                                          event,
                                                          `supporting_${index}`
                                                        )
                                                      }
                                                    />
                                                  </Dropzone>
                                                )} */}
                                                <UploadLimit>
                                                  Max 300kb
                                                </UploadLimit>
                                              </UploadDocument>
                                            </UploadSupportingDocument>
                                          </SupportingDocument>
                                        </div>
                                      ))}
                                  </VerificationContent>
                                  {/* <AddJointOwnerButton onClick={addJointOwner}>
                                        Add Joint Owner
                                      </AddJointOwnerButton> */}
                                </div>
                              </div>

                              <AddJointOwnerButton onClick={addJointOwner}>
                                <PlusIcon
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/10aebfdf3fb247486de5d148c0c3d53a7b1bbe2a4cb4d641c7f8e992e1c5e0b8?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                                  alt="Plus Icon"
                                />
                                <span>Add joint owner</span>
                              </AddJointOwnerButton>
                            </div>

                            <Accordion>
                              <SectionSubtitle onClick={toggleAccordion}>
                                Customer Address
                                {isOpen ? <ExpandLess /> : <ExpandMore />}
                              </SectionSubtitle>
                              <AccordionContent open={isOpen}>
                                <CustomerAddressInputsGrid>
                                  <CustomerAddressInputColumn>
                                    <CustomerAddressInputLabel htmlFor="pincode">
                                      Pincode
                                    </CustomerAddressInputLabel>
                                    <CustomerAddressInput
                                      id="pincode"
                                      type="text"
                                      placeholder="Enter pincode"
                                      value={userData.pinCode}
                                      disabled
                                    />
                                  </CustomerAddressInputColumn>

                                  <CustomerAddressInputColumn>
                                    {/* <CustomerAddressInputLabel>City</CustomerAddressInputLabel>
                                        <Select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
                                          <option value="">Select city</option>
                                          {cityOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                              {option.label}
                                            </option>
                                          ))}
                                        </Select> */}
                                    <CustomerAddressInputLabel htmlFor="city">
                                      City
                                    </CustomerAddressInputLabel>
                                    <CustomerAddressInput
                                      id="city"
                                      type="text"
                                      placeholder="Enter city"
                                      value={userData.address5}
                                      disabled
                                    />
                                  </CustomerAddressInputColumn>
                                </CustomerAddressInputsGrid>

                                <CustomerAddressInputsGrid>
                                  <CustomerAddressInputColumn>
                                    <CustomerAddressInputLabel htmlFor="apartment">
                                      Apartment, house, etc
                                    </CustomerAddressInputLabel>
                                    <CustomerAddressInput
                                      id="apartment"
                                      type="text"
                                      placeholder="Eg. Flat no 1, Shreeniwas heights"
                                      value={userData.address1}
                                      disabled
                                    />
                                  </CustomerAddressInputColumn>

                                  <CustomerAddressInputColumn>
                                    <CustomerAddressInputLabel htmlFor="street">
                                      Street address
                                    </CustomerAddressInputLabel>
                                    <CustomerAddressInput
                                      id="street"
                                      type="text"
                                      placeholder="Eg. Main street"
                                      value={userData.address2}
                                      disabled
                                    />
                                  </CustomerAddressInputColumn>
                                </CustomerAddressInputsGrid>

                                <CustomerAddressInputsGrid>
                                  <CustomerAddressInputColumn>
                                    <CustomerAddressInputLabel htmlFor="area">
                                      Area
                                    </CustomerAddressInputLabel>
                                    <CustomerAddressInput
                                      id="area"
                                      type="text"
                                      placeholder="Eg.Flat no 1, Shreeniwas heights"
                                      value={userData.address4}
                                      disabled
                                    />
                                  </CustomerAddressInputColumn>

                                  <CustomerAddressInputColumn>
                                    <CustomerAddressInputLabel htmlFor="landmark">
                                      Land mark
                                    </CustomerAddressInputLabel>
                                    <CustomerAddressInput
                                      id="landmark"
                                      type="text"
                                      placeholder="Eg. Main street"
                                      value={userData.address3}
                                      disabled
                                    />{" "}
                                  </CustomerAddressInputColumn>
                                </CustomerAddressInputsGrid>
                              </AccordionContent>
                            </Accordion>

                            <VerificationSection>
                              <SectionSubtitle>Verification</SectionSubtitle>
                              <VerificationContent>
                                <SignatureVerification>
                                  <VerificationLabel>
                                    Signature
                                  </VerificationLabel>
                                  <UploadButton>
                                    <label
                                      htmlFor="signature_new"
                                      style={{ cursor: "pointer" }}>
                                      <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4126c38779fb4c87794a58f116e60f665d4a2ba4c305ce52c8e982673cecb41c?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                                        alt="Upload Icon"
                                        style={{ cursor: "pointer" }}
                                      />
                                      <span> Upload signature</span>
                                    </label>
                                    {/* {uploadedFiles.signature_new ? (
                                      <UploadedFileWrapper>
                                        <UploadedFileContent>
                                          <img
                                            src={uploadedFileURLs.signature_new}
                                            alt="Uploaded File"
                                          />
                                        </UploadedFileContent>
                                        <IconButton
                                          onClick={() =>
                                            removeUploadedFile("signature_new")
                                          }
                                          size="small"
                                          aria-label="remove file">
                                          <CloseIcon />
                                        </IconButton>
                                      </UploadedFileWrapper>
                                    ) : (
                                      <Dropzone
                                        onDrop={(event) =>
                                          handleDrop(event, "signature_new")
                                        }
                                        onDragOver={handleDragOver}>
                                        <Input
                                          type="file"
                                          id="signature_new"
                                          style={{ display: "none" }}
                                          onChange={(event) =>
                                            handleFileUpload(
                                              event,
                                              "signature_new"
                                            )
                                          }
                                        />
                                      </Dropzone>
                                    )} */}
                                    {/* <UploadLimit>Max 300kb</UploadLimit> */}
                                  </UploadButton>
                                </SignatureVerification>

                                <AadharVerification>
                                  <VerificationLabel>
                                    Aadhar verification
                                  </VerificationLabel>
                                  <VerifyButton>
                                    <img
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1079410e0d0fd5631d29995becaba0d65f66d90812d84fd62966cdd929a04605?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                                      alt="Verify Icon"
                                    />
                                    <span>Verify</span>
                                  </VerifyButton>
                                </AadharVerification>
                              </VerificationContent>
                            </VerificationSection>

                            <DocumentSection>
                              <IdProofDocument>
                                <DocumentInputColumn>
                                  <DocumentTitle>ID proof</DocumentTitle>
                                  <Select
                                    id="idProof"
                                    value={userData.idProof || ""}
                                    onChange={(e) =>
                                      setUserData({
                                        ...userData,
                                        idProof: e.target.value,
                                      })
                                    }
                                    style={{ width: "100%" }}>
                                    <option value="">Select document </option>
                                    {idProofOptions.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.label}
                                      </option>
                                    ))}
                                  </Select>
                                </DocumentInputColumn>
                              </IdProofDocument>

                              <UploadIdProof>
                                <UploadTitle>
                                  Upload ID proof document
                                </UploadTitle>

                                <UploadDocument>
                                  {/* {uploadedFiles.idproof ? (
                                    <UploadedFileWrapper>
                                      <UploadedFileContent>
                                        <img
                                          src={uploadedFileURLs.idproof}
                                          alt="Uploaded File"
                                        />
                                      </UploadedFileContent>
                                      <IconButton
                                        onClick={() =>
                                          removeUploadedFile("idproof")
                                        }
                                        size="small"
                                        aria-label="remove file">
                                        <CloseIcon />
                                      </IconButton>
                                    </UploadedFileWrapper>
                                  ) : (
                                    <Dropzone
                                      onDrop={(event) =>
                                        handleDrop(event, "idproof")
                                      }
                                      onDragOver={handleDragOver}>
                                      <UploadIcon>
                                        <img
                                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d318989f4a0157ea3cd87b32ae36f1dbc5f5f7ce56dcd4ce7e20b841c6cdf4f?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                                          alt="Upload Icon"
                                        />
                                        <UploadText>
                                          Drag & Drop or
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                            }}>
                                            <label
                                              htmlFor="idproof"
                                              style={{
                                                cursor: "pointer",
                                                textDecoration: "underline",
                                                color: "#f99d1c",
                                                marginBottom: "7px",
                                              }}>
                                              Choose File
                                            </label>
                                          </div>
                                        </UploadText>
                                      </UploadIcon>
                                      <Input
                                        type="file"
                                        id="idproof"
                                        style={{ display: "none" }}
                                        onChange={(event) =>
                                          handleFileUpload(event, "idproof")
                                        }
                                      />
                                    </Dropzone>
                                  )} */}
                                  <UploadLimit>Max 300kb</UploadLimit>
                                </UploadDocument>
                              </UploadIdProof>
                            </DocumentSection>

                            <DocumentSection>
                              <OwnershipDocument>
                                <DocumentInputColumn>
                                  <DocumentTitle>
                                    Ownership document
                                  </DocumentTitle>
                                  <Select
                                    id="ownershipDocument"
                                    value={userData.ownershipDocument || ""}
                                    onChange={(e) =>
                                      setUserData({
                                        ...userData,
                                        ownershipDocument: e.target.value,
                                      })
                                    }
                                    style={{ width: "100%" }}>
                                    <option value="">Select document</option>
                                    {ownershipOptions.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.label}
                                      </option>
                                    ))}
                                  </Select>
                                </DocumentInputColumn>
                              </OwnershipDocument>
                              <UploadOwnershipDocument>
                                <UploadTitle>
                                  Existing ownership documents
                                </UploadTitle>

                                <UploadDocument>
                                  {/* {uploadedFiles.ownership ? (
                                    <UploadedFileWrapper>
                                      <UploadedFileContent>
                                        <img
                                          src={uploadedFileURLs.ownership}
                                          alt="Uploaded File"
                                        />
                                      </UploadedFileContent>
                                      <IconButton
                                        onClick={() =>
                                          removeUploadedFile("ownership")
                                        }
                                        size="small"
                                        aria-label="remove file">
                                        <CloseIcon />
                                      </IconButton>
                                    </UploadedFileWrapper>
                                  ) : (
                                    <Dropzone
                                      onDrop={(event) =>
                                        handleDrop(event, "ownership")
                                      }
                                      onDragOver={handleDragOver}>
                                      <UploadIcon>
                                        <img
                                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d318989f4a0157ea3cd87b32ae36f1dbc5f5f7ce56dcd4ce7e20b841c6cdf4f?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                                          alt="Upload Icon"
                                        />
                                        <UploadText>
                                          Drag & Drop or
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                            }}>
                                            <label
                                              htmlFor="ownership"
                                              style={{
                                                cursor: "pointer",
                                                textDecoration: "underline",
                                                color: "#f99d1c",
                                                marginBottom: "7px",
                                              }}>
                                              Choose File
                                            </label>
                                          </div>
                                        </UploadText>
                                      </UploadIcon>
                                      <Input
                                        type="file"
                                        id="ownership"
                                        style={{ display: "none" }}
                                        onChange={(event) =>
                                          handleFileUpload(event, "ownership")
                                        }
                                      />
                                    </Dropzone>
                                  )} */}
                                  <UploadLimit>Max 300kb</UploadLimit>
                                </UploadDocument>
                              </UploadOwnershipDocument>
                            </DocumentSection>
                            <DocumentSection>
                              <SupportingDocument>
                                <DocumentInputColumn>
                                  <DocumentTitle>
                                    Supporting document
                                  </DocumentTitle>
                                  <Select
                                    id="supportingDocument"
                                    value={userData.supportingDocument || ""}
                                    onChange={(e) =>
                                      setUserData({
                                        ...userData,
                                        supportingDocsOptions: e.target.value,
                                      })
                                    }
                                    style={{ width: "100%" }}>
                                    <option value="">Select document</option>
                                    {supportingDocsOptions.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.label}
                                      </option>
                                    ))}
                                  </Select>
                                </DocumentInputColumn>
                              </SupportingDocument>
                              <UploadSupportingDocument>
                                <UploadTitle>
                                  Existing supporting document
                                </UploadTitle>

                                <UploadDocument>
                                  {/* {uploadedFiles.supporting ? (
                                    <UploadedFileWrapper>
                                      <UploadedFileContent>
                                        <img
                                          src={uploadedFileURLs.supporting}
                                          alt="Uploaded File"
                                        />
                                      </UploadedFileContent>
                                      <IconButton
                                        onClick={() =>
                                          removeUploadedFile("supporting")
                                        }
                                        size="small"
                                        aria-label="remove file">
                                        <CloseIcon />
                                      </IconButton>
                                    </UploadedFileWrapper>
                                  ) : (
                                    <Dropzone
                                      onDrop={(event) =>
                                        handleDrop(event, "supporting")
                                      }
                                      onDragOver={handleDragOver}>
                                      <UploadIcon>
                                        <img
                                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d318989f4a0157ea3cd87b32ae36f1dbc5f5f7ce56dcd4ce7e20b841c6cdf4f?apiKey=183f48cf3544413d95323f9ce6e9aa6a&"
                                          alt="Upload Icon"
                                        />
                                        <UploadText>
                                          Drag & Drop or
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                            }}>
                                            <label
                                              htmlFor="supporting"
                                              style={{
                                                cursor: "pointer",
                                                textDecoration: "underline",
                                                color: "#f99d1c",
                                                marginBottom: "7px",
                                              }}>
                                              Choose File
                                            </label>
                                          </div>
                                        </UploadText>
                                      </UploadIcon>
                                      <Input
                                        type="file"
                                        id="supporting"
                                        style={{ display: "none" }}
                                        onChange={(event) =>
                                          handleFileUpload(event, "supporting")
                                        }
                                      />
                                    </Dropzone>
                                  )} */}
                                  <UploadLimit>Max 300kb</UploadLimit>
                                </UploadDocument>
                              </UploadSupportingDocument>
                            </DocumentSection>
                            <ActionButtons>
                              <SaveDraftButton onClick={handleSaveNext}>
                                Save as draft
                              </SaveDraftButton>
                              <SaveNextButton onClick={saveApplication}>
                                Save & next
                              </SaveNextButton>
                            </ActionButtons>
                          </NewCustomerSection>
                        </CustomerInfoContainer>
                      </CustomerInfoWrapper>
                    </FormCard>
                  </FormColumn>
                </FormWrapper>
              </FormSection>
            </MainColumnContent>
          </MainColumn>
        </MainContentWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default MainContainerData;

const PageTitleText = styled.h1`
  color: #242b3e;
  flex-grow: 1;
  margin: auto 0;
  font: 20px/120% Roboto, sans-serif;
`;
const ServiceNumber = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  line-height: 150%;
  justify-content: center;
`;

const ServiceNumberBg = styled.div`
        display: flex;
        flex-direction: column;
        font-family: Roboto, sans-serif;
        position: relative;
        fill: linear-gradient(129deg, #fe5907 20.63%, #f99d1c 92.34%);
        overflow: hidden;
        aspect-ratio: 5;
        width: 170px;
        align-items: start;
        justify-content: center;
        padding: 11px;

        @media (max-width: 991px) {
          padding - right: 20px;
}
        `;

const ServiceNumberIcon = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const PageTitle = styled.div`
  display: flex;
  // margin-top: 16px;
  gap: 20px;
  font-weight: 600;
`;

const ActionButton = styled.button`
  font-family: Roboto, sans-serif;
  border-radius: 50px;
  border: 1px solid rgba(249, 157, 28, 1);
  background-color: #f6f6f6;
  justify-content: center;
  padding: 11px 25px;
  cursor: pointer;
  height :100%;
  color : rgba(249, 157, 28, 1);
  font-size: 4px,

  @media (max-width: 991px) {
    /* padding: 0 20px; */
  }
`;
const Actions = styled.div`
        display: flex;
        gap: 20px;
        /* font-size: 16px; */
        color: #f99d1c;
        font-weight: 600;
        text-align: center;

        @media (max-width: 991px) {
          flex-wrap: wrap;
}
        `;

const HeaderContent = styled.div`
        display: flex;
        // margin-top: 20px;
        width: 100%;
        align-items: start;
        gap: 20px;
        justify-content: space-between;

        @media (max-width: 991px) {
          max - width: 100%;
        flex-wrap: wrap;
}
        `;
const StepConnector = styled.img`
        aspect-ratio: 0.1;
        object-fit: contain;
        width: 4px;
        fill: #95979c;
        margin: 0px 0 10px 13px;

        @media (max-width: 991px) {
          margin - left: 10px;
}
        `;

const StepCircle = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StepCircleInner = styled.div`
  border-radius: 50%;
  border: 2px solid #fc6c0d;
  width: 30px;
  height: 30px;
`;

const StepNumber = styled.span`
  font: 400 13px Roboto, sans-serif;
`;

const StepTitle = styled.span`
  margin-top: 6px;
  font: 500 16px Roboto, sans-serif;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #242b3e;
  padding: 2px 0;
`;

const StepsColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 23%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StepsCard = styled.div`
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);

        display: flex;
        flex-direction: column;
        align-items: center;
        aspect-ratio: 1;
        width: 100%;
        padding: 2px;
        margin: -11px

        @media (max-width: 991px) {
          margin - top: 30px;
        padding: 0 20px;
}
        `;

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepItem = styled.div`
  display: flex;
  gap: 11px;
`;

const SectionTitle = styled.h2`
  color: #242b3e;
  font-size: 16px;
  font-weight: 500;
`;

const CustomerName = styled.div`
  background-color: rgba(36, 43, 62, 0.05);
  border: 1px solid rgba(36, 43, 62, 0.3);
  border-radius: 5px;
  color: #242b3e;
  font-size: 16px;
  margin-top: 10px;
  padding: 13px 20px;
`;

const CustomerNameWrapper = styled.div`
  flex: 1;
`;

const SignatureIcon = styled.img`
  width: 18px;
`;
const ExistingSignatureLabel = styled.div`
  color: #7d7e82;
  display: flex;
  font-size: 15px;
  gap: 14px;
`;
const ExistingSignatureWrapper = styled.div`
  flex: 1;
  margin-top: 4px;
`;

const ExistingCustomerSection = styled.section`
  margin-top: 22px;
`;

const ExistingCustomerContent = styled.div`
        display: flex;
        gap: 20px;
        margin-top: 26px;

        @media (max-width: 991px) {
          flex - wrap: wrap;
  }
        `;
const NewCustomerSection = styled.section`
  margin-top: 40px;
`;

const CustomerInfoRow = styled.div`
        display: flex;
        gap: 20px;
        font-weight: 400;

        @media (max-width: 991px) {
          flex - wrap: wrap;
  }
        `;

const CustomerInfoCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: fit-content;
`;
const LegalStatusOption = styled.label`
  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + .checkbox-label {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 2px solid #f99d1c; /* Yellow color */
      border-radius: 50%;
      background-color: white;
    }
    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: 6px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #f99d1c; /* Yellow color */
      display: none;
    }
  }

  input[type="radio"]:checked + .checkbox-label:after {
    display: block;
  }
`;

const LegalStatusOptions = styled.div`
        display: flex;
        align-items: start;
        gap: 20px;
        font-size: 16px;
        color: #242b3e;
        line-height: 150%;

        @media (max-width: 991px) {
          padding - right: 20px;
  }
        `;
const Label = styled.label`
  color: #7d7e82;
  font-size: 15px;
  display: block;

  ${(props) =>
    props.required &&
    `
    &::after {
      content: "*";
      color: #ff1313;
      margin-left: 2px;
    }
  `}
`;

const CustomerNameInput = styled.div`
  display: flex;
  margin-top: 29px;
  flex-direction: column;
`;

const CustomerPhotoCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 27%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    margin-top: 29px;
  }
`;

const UploadPhotoText = styled.div`
  color: #7d7e82;
  font-size: 14px;
  // margin-top: 10px;
  text-align: center;
  // text-decoration: underline;
`;

const UploadPhoto = styled.div`
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #95979c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 135px;
  margin: 0 auto;
  padding: 0 6px;
`;

const UploadPhotoContent = styled.div`
  border-radius: 5px;
  background-color: #fff;
  border: 1px dashed #95979c;
  //   display: flex;
  flex-direction: column;
  width: 122px;
  height: 122px;
  padding: 10px 20px;
`;
const NewCustomerDetails = styled.div`
  margin-top: 16px;
  width: 532px;
  max-width: 100%;
`;

const CustomerDetailsRow = styled.div`
        display: flex;
        gap: 20px;

        @media (max-width: 991px) {
          flex - direction: column;
        gap: 0;
  }
        `;

const CustomerDetailsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 73%;
  margin: auto 0;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 33px;
  }
`;

const TitleDropdown = styled.select`
        border-radius: 5px;
        border: 1px solid rgba(36, 43, 62, 0.3);
        background-color: #fff;
        display: flex;
        gap: 10px;
        font-size: 15px;
        color: #242b3e;
        white-space: nowrap;
        padding: 10px;
// width: 80px;
        @media (max-width: 991px) {
          white - space: initial;
  }
        `;
const CustomerNameField = styled.input`
  border-radius: 5px;
  border: 1px solid rgba(36, 43, 62, 0.3);
  color: #242b3e;
  // flex-grow: 1;
  width: fit-content;
  padding: 10px 20px;
  font: 16px Roboto, sans-serif;
`;

const CustomerNameFields = styled.div`
  display: flex;
  margin-top: 13px;
  gap: 17px;
`;

const CustomerNameInput1 = styled.div`
  display: flex;
  // margin-top: 29px;
  flex-direction: column;
`;
const AddJointOwnerButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 1px solid #f99d1c;
  border-radius: 50px;
  color: #f99d1c;
  //   display: flex;
  font-size: 16px;
  font-weight: 600;
  gap: 10px;
  justify-content: center;
  letter-spacing: 0.16px;
  margin: 35px auto 0;
  max-width: 178px;
  padding: 12px 20px;
  text-align: center;
  width: 100%;
`;

const PlusIcon = styled.img`
  width: 13px;
`;
const CustomerAddressInput = styled.input`
  border: 1px solid rgba(36, 43, 62, 0.3);
  border-radius: 5px;
  margin-top: 10px;
  padding: 13px 20px;
  font: 16px Roboto, sans-serif;
  // color: rgba(36, 43, 62, 0.3);
`;

const CustomerAddressInputsGrid = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-top: 30px;

        @media (max-width: 991px) {
          grid - template - columns: 1fr;
  }
        `;

const CustomerAddressInputColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomerAddressInputLabel = styled.label`
  color: #7d7e82;
  font: 15px Roboto, sans-serif;
`;
const Accordion = styled.div`
  // border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const AccordionHeader = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  padding: 10px;
  display: ${(props) => (props.open ? "block" : "none")};
`;
const SectionSubtitle = styled.h3`
        background-color: #f6f6f6;
        border-radius: 5px;
        color: #242b3e;
        font-size: 16px;
        font-weight: 500;
        padding: 10px 20px;
        margin-top: 22px;
        cursor: pointer;

        @media (max-width: 991px) {
          max - width: 100%;
  }
        `;

const SignatureVerification = styled.div`
  flex: 1;
`;

const UploadButton = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(36, 43, 62, 0.3);
  border-radius: 5px;
  color: #7d7e82;
  display: flex;
  font-size: 14px;
  gap: 10px;
  justify-content: center;
  margin-top: 11px;
  padding: 10px;
  /* width: 100%; */
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
const VerificationLabel = styled.div`
  color: #7d7e82;
  font-size: 15px;
`;
const AadharVerification = styled.div`
  flex: 1;
`;

const VerifyButton = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #95979c;
  border-radius: 5px;
  color: #7d7e82;
  display: flex;
  font-size: 14px;
  gap: 10px;
  justify-content: center;
  margin-top: 13px;
  padding: 9px 60px;
  white-space: nowrap;
  /* width: 100%; */
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 0 20px;
    white-space: initial;
  }
`;

const VerificationSection = styled.section`
  margin-top: 35px;
`;
const VerificationContent = styled.div`
        display: flex;
        font-weight: 400;
        gap: 20px;
        margin-top: 33px;

        @media (max-width: 991px) {
          flex - wrap: wrap;
  }
        `;
const IdProofDocument = styled.div`
  flex: 1;
`;

const UploadIdProof = styled.div`
  flex: 1;
`;

const OwnershipDocument = styled.div`
  flex: 1;
`;

const UploadOwnershipDocument = styled.div`
  flex: 1;
`;

const DocumentTitle = styled.div`
  color: #7d7e82;
  font-size: 15px;
`;

const Select = styled.select`
  border-radius: 5px;
  border: 1px solid rgba(36, 43, 62, 0.3);
  margin-top: 10px;
  padding: 13px 20px;
  font-size: 16px;
  color: #7d7e82;
  font-family: Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const DocumentInputColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SupportingDocument = styled.div`
  flex: 1;
`;

const UploadTitle = styled.div`
  color: #7d7e82;
  font-size: 15px;
`;

const UploadSupportingDocument = styled.div`
  flex: 1;
`;

const UploadIcon = styled.div`
  // color: #f99d1c;
  display: flex;
  font-size: 14px;
  gap: 12px;
`;
const UploadedFileContent = styled.span``;

const UploadedFileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const UploadText = styled.div`
  color: #7d7e82;
  display: flex;
  font-size: 14px;
  gap: 5px;
`;

const UploadLimit = styled.div`
  color: #7d7e82;
  font-size: 13px;
  text-align: right;
`;
const Dropzone = styled.div`
  // border: 2px dashed #ccc;
  // padding: 20px;
  // text-align: center;
  // cursor: pointer;
  // &:hover {
  //   border-color: #aaa;
  // }
`;

const UploadDocument = styled.div`
  background-color: #fff;
  border: 1px solid rgba(36, 43, 62, 0.3);
  border-radius: 5px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 10px;
  padding: 11px 15px;
  /* width: 100%; */
`;
const DocumentSection = styled.section`
        display: flex;
        font-weight: 400;
        gap: 20px;
        margin-top: 33px;

        @media (max-width: 991px) {
          flex - wrap: wrap;
  }
        `;
const ActionButtons = styled.div`
        display: flex;
        font-size: 16px;
        font-weight: 600;
        gap: 20px;
        justify-content: space-between;
        margin-top: 34px;
        padding: 0 2px;
        text-align: center;

        @media (max-width: 991px) {
          flex - wrap: wrap;
        max-width: 100%;
  }
        `;

const SaveDraftButton = styled.button`
  background-color: #fff;
  border: 1px solid rgba(36, 43, 62, 0.5);
  border-radius: 50px;
  color: #242b3e;
  font-family: Roboto, sans-serif;
  justify-content: center;
  padding: 12px 25px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SaveNextButton = styled.button`
  background-color: #f99d1c;
  border: none;
  border-radius: 50px;
  color: #242b3e;
  font-family: Roboto, sans-serif;
  justify-content: center;
  letter-spacing: 0.16px;
  padding: 12px 25px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const NewCustomerContent = styled.div`
        display: flex;
        gap: 20px;
        margin-top: 29px;

        @media (max-width: 991px) {
          flex - wrap: wrap;
        max-width: 100%;
  }
        `;
const CustomerInfoWrapper = styled.div`
  // background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  //   padding: 80px 60px;

  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const CustomerInfoContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  max-width: 845px;
  width: 100%;
  //   padding: 33px 39px 53px;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 77%;
  // margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FormCard = styled.div`
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);

        display: flex;
        flex-grow: 1;
        flex-direction: column;
        width: 100%;
        padding: 33px 12px 53px;

        @media (max-width: 991px) {
          max - width: 100%;
        margin-top: 30px;
        padding: 0 20px;
}
        `;

const FormSection = styled.section`
        margin-top: 13px;

        @media (max-width: 991px) {
          max - width: 100%;
}
        `;

const FormWrapper = styled.div`
        gap: 20px;
        display: flex;

        @media (max-width: 991px) {
          flex - direction: column;
        align-items: stretch;
        gap: 0px;
}
        `;

const MainContainer = styled.main`
        // background-color: #f6f6f6;
        display: flex;
        flex-direction: column;
        // padding: 0 29px 35px 0;

        @media (max-width: 991px) {
          padding - right: 20px;
}
        `;

const MainContent = styled.div`
        @media (max-width: 991px) {
          max - width: 100%;
}
        `;

const MainContentWrapper = styled.div`
        gap: 20px;
        display: flex;

        @media (max-width: 991px) {
          flex - direction: column;
        align-items: stretch;
        gap: 0px;
}
        `;

const MainColumn = styled.section`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  // margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const MainColumnContent = styled.div`
        display: flex;
        flex-grow: 1;
        flex-direction: column;

        @media (max-width: 991px) {
          max - width: 100%;
        margin-top: 36px;
}
        `;
