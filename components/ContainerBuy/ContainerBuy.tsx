import { Col, Row } from "antd";
import React from "react";
import CardCarsContainer from "../CardCarsContainer/CardCarsContainer";
import SideBar from "../SideBar/SideBar";

const ContainerBuy = ({ cars }: { cars: any }) => {
  return (
    <Row>
      <Col lg={6}>
        <SideBar />
      </Col>
      <Col lg={18}>
        <CardCarsContainer cars={cars} />
      </Col>
    </Row>
  );
};

export default ContainerBuy;
