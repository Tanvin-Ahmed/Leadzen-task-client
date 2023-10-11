import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UserType } from "../types";
import { useLoaderData } from "react-router-dom";

const SingleUser = () => {
  const user = useLoaderData() as UserType;
  return (
    <Container>
      <div className="py-5">
        <h1 className="text-bold">User Information</h1>
        <Row>
          <Col sm={6} xs={12}>
            <h5>
              <strong>Personal information</strong>
            </h5>
            <strong>Name</strong>
            <p>{user.name}</p>
            <strong>Username</strong>
            <p>{user.username}</p>
            <strong>Contact</strong>
            <p>{user.phone}</p>
            <strong>Email</strong>
            <p>{user.email}</p>
            <strong>Website</strong>
            <p>{user.website}</p>
            <strong className="mb-3 d-block">Address</strong>
            <div style={{ marginLeft: "1rem" }}>
              <strong>City</strong>
              <p>{user.address.city}</p>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <strong>Street</strong>
              <p>{user.address.street}</p>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <strong>Zip code</strong>
              <p>{user.address.zipcode}</p>
            </div>
          </Col>
          <Col sm={6} xs={12}>
            <h5>
              <strong>Company information</strong>
            </h5>
            <strong>Name</strong>
            <p>{user.company.name}</p>
            <strong>Catch phrase</strong>
            <p>{user.company.catchPhrase}</p>
            <strong>BS</strong>
            <p>{user.company.bs}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SingleUser;
