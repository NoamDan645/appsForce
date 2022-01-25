import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./../redux/actions";
import { Row, Col, Button } from "react-bootstrap";
import UserModal from "./UserModal";

export default function UserCard(props) {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const deleteUser = () => {
    dispatch(actions.deleteUser(props.index));
  };

  const style = {
    row: { margin: "10px", padding: "10px ", background: "white" },
    image: {
      margin: "6px",
      border: "2px solid black",
      borderRadius: "50%",
      width: "60%",
    },
    imageCol: { textAlign: "center", marginRight: "100px",margin: "px" },
  };

  return (
    <Row  style={style.row}>
      <Col xl={6} md={4} sm={10} style={style.imageCol}>
        <img
          style={style.image}
          src={users[props.index].picture?.medium}
          alt=""
        />
      </Col>
      <Col style={{}}>
        <h6>
          <label>
            {" "}
            <h5>Name :</h5>{" "}
          </label>
          {users[props.index].name.title} {users[props.index].name?.first}{" "}
          {users[props.index].name?.last}
        </h6>
        <h6>
          <label>
            {" "}
            <h5>Email :</h5>{" "}
          </label>
          {users[props.index].email}
        </h6>
        <h6>
          <label>
            {" "}
            <h5>Address :</h5>{" "}
          </label>
          {users[props.index].location?.street?.number}{" "}
          {users[props.index].location?.street?.name}
          {", "}
          {users[props.index].location?.city}
          {", "}
          {users[props.index].location?.country}
        </h6>
        <h6>
          <label>
            <h5>ID :</h5>
          </label>
          {users[props.index].id?.name} {users[props.index].id?.value}
        </h6>
        <Button
          style={{ marginRight: "15px" }}
          variant="danger"
          onClick={(e) => deleteUser()}
        >
          Delete User
        </Button>

        <UserModal index={props.index} />
      </Col>
    </Row>
  );
}
