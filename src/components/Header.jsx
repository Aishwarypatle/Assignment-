import React from "react";

const Header = () => {
  return (
    <HeaderContent>
      <PageTitle>
        <PageTitleText>Name change</PageTitleText>
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
              Service no - {userData.serviceNo}
            </span>
          </ServiceNumberBg>
        </ServiceNumber>
      </PageTitle>
      <Actions>
        <ActionButton>Book video call appointment</ActionButton>

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
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasProcedure"
            aria-labelledby="offcanvasProcedureLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasProcedureLabel">View Load</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
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
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasFAQs"
            aria-labelledby="offcanvasFAQsLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasFAQsLabel">Document list </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <DocumentList />
            </div>
          </div>
        </div>
        {/* <ActionButton>View load</ActionButton>
                      <ActionButton>Document list</ActionButton> */}
      </Actions>
    </HeaderContent>
  );
};

export default Header;
