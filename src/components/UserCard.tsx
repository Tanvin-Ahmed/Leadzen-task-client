import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserType } from "../types";

interface UserCardPropsType {
  data: UserType;
}

const UserCard: React.FC<UserCardPropsType> = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = (id: number) => {
    navigate(`/single-user/${id}`);
  };

  return (
    <Card className="w-full mb-5">
      <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-4">
        <div>
          <Card.Text>{data.id}</Card.Text>
        </div>
        <div>
          <Card.Title>Name</Card.Title>
          <Card.Text>{data.name}</Card.Text>
        </div>
        <div>
          <Card.Title>Contact</Card.Title>
          <Card.Text>{data.phone}</Card.Text>
        </div>
        <div>
          <Card.Title>Company</Card.Title>
          <Card.Text>{data.company.name}</Card.Text>
        </div>
        <div>
          <Card.Title>City</Card.Title>
          <Card.Text>{data.address.city}</Card.Text>
        </div>
        <Button
          variant="outline-info"
          size="sm"
          onClick={() => handleRoute(data.id)}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
