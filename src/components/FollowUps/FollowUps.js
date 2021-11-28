import React, { useState } from "react";
import SvgLoader from "components/svg/SvgLoader";
import { Modal } from "react-bootstrap";
import { PrimaryLinkButton, PrimaryButton } from "components/Button/Buttons";

if (process.browser) {
  require("./FollowUps.scss");
}

function ShowFollowUpDetails({ show, handleClose }) {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        dialogClassName="FollowUpsModal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="width-responsive">
            <div className="FollowUpDetails">
              <div className="FollowUpDetails_leftSide">
                <div className="FollowUpDetails_leftSide--img">
                  <img
                    src="https://placeimg.com/200/200/people/12"
                    alt="user"
                  />
                </div>
                <div className="FollowUpDetails_leftSide_userDetails">
                  <span className="FollowUpDetails_leftSide_userDetails--name">
                    JOHN SMITH
                  </span>
                  <span className="FollowUpDetails_leftSide_userDetails--dob">
                    DOB: 03/13/1997
                  </span>
                  <span className="FollowUpDetails_leftSide_userDetails--age">
                    AGE: 22 year 4 month
                  </span>
                </div>
              </div>
              <div className="FollowUpDetails_rightSide">
                <span className="FollowUpDetails_rightSide--location">
                  Chandigarh, India
                </span>
                <span className="FollowUpDetails_rightSide--status">
                  Follow up requested
                </span>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="FollowUpsModal_body">
            <div className="FollowUpsModal_body_leftDetails">
              <div className="d-flex flex-column">
                <span className="FollowUpsModal_body--title">
                  APPOINTMENT AGENDA
                </span>
                <span className="FollowUpsModal_body--content">
                  Headache & Bodyache
                </span>
              </div>
              <div className="d-flex flex-column mt-3 mb-5">
                <span className="FollowUpsModal_body--title">
                  PRESCRIBED DRUGS
                </span>
                <span className="FollowUpsModal_body--content">
                  - Aspirin, Ibuprofen (Advil, Motrin IB)
                </span>
                <span className="FollowUpsModal_body--content">
                  - Naproxen (Aleve)
                </span>
              </div>
              <PrimaryLinkButton styleName="mt-auto">
                <SvgLoader xlinkHref="#message" className="modal_btn" />
                Start Chatting
              </PrimaryLinkButton>
            </div>
            <div className="FollowUpsModal_body_rightDetails">
              <span className="FollowUpsModal_body--title">
                PATIENT’S COMMENTS
              </span>
              <span className="FollowUpsModal_body--content mt-1">
                Hi doctor, the medicines you prescribed are not working to the
                fullest and I am constantly getting severe headaches for more
                than 4 hours. Because of which I am getting fever in the night
                Please help me with the problem.{<br />} Thanks!
              </span>
              <div className="d-flex flex-wrap justify-content-between mt-auto">
                <PrimaryLinkButton>
                  <SvgLoader xlinkHref="#editIcon" className="modal_btn" />
                  Create Prescription
                </PrimaryLinkButton>
                <PrimaryButton>Request Reappointment</PrimaryButton>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function FollowUps() {
  const [showDetails, setShowDetails] = useState(false);
  const handleClose = () => setShowDetails(false);
  const handleShow = () => setShowDetails(true);
  return (
    <div className="FollowUps">
      <span className="FollowUps_Title">Follow Up Requests</span>
      <ShowFollowUpDetails show={showDetails} handleClose={handleClose} />
      <div class="table-responsive">
        <table
          class="table table-sm FollowUps_table"
          cellspacing="0"
          cellpadding="0"
        >
          <thead>
            <tr>
              <th scope="col" className="border-left-radius">
                Name
              </th>
              <th scope="col">Problem</th>
              <th scope="col">Consulted On</th>
              <th scope="col">Comments</th>
              <th scope="col" className="border-right-radius">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Mr. Dev Kumar Prasad</th>
              <td>Backache</td>
              <td>April 22nd , 5:30 PM</td>
              <td>I’m suffering from same problem</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary btn-sm bg-color"
                  onClick={handleShow}
                >
                  View Case
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">Mr. Abhishek Sharma</th>
              <td>Cold & Fever</td>
              <td>April 21st , 6:30 PM</td>
              <td>I’m suffering from same problem</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary btn-sm bg-color"
                  onClick={handleShow}
                >
                  View Case
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
