import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashborad = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <Container>
      <Row className="my-5">
        <div className="col-lg-6">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart width={150} height={400} data={data}>
              <Line dataKey={"investment"}></Line>
              <Line dataKey={"sell"}></Line>
              <Line dataKey={"revenue"}></Line>
              <XAxis dataKey="month"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
            </LineChart>
          </ResponsiveContainer>
          <h4 className="text-center mt-3">SimpleLineChart</h4>
        </div>
        <div className="col-lg-6">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey={"investment"} fill="#f5794c" />
              <Bar dataKey={"sell"} fill="#4feb34" />
              <Bar dataKey={"revenue"} fill="#4c4cf5" />
              <XAxis dataKey="month"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
            </BarChart>
          </ResponsiveContainer>
          <h4 className="text-center mt-3">TinyBarChart</h4>
        </div>
      </Row>
    </Container>
  );
};

export default Dashborad;
