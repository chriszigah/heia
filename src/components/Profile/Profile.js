import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [key, setKey] = useState("home");

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Info" title="Info">
          <div className="container">
            <header className="jumbotron">
              <h3>
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
              <strong>First Name:</strong> {currentUser.fname}
            </p>
            <p>
              <strong>Last Name:</strong> {currentUser.lname}
            </p>
            <p>
              <strong>Other Names:</strong> {currentUser.oname}
            </p>
            <p>
              <strong>Date of Birth:</strong> {currentUser.dob}
            </p>
            <p>
              <strong>Class ID:</strong> {currentUser.classid}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Profile;
