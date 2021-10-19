import { Card, Col, Row } from "react-bootstrap";
import dot from "../images/dot.png";
import dot1 from "../images/dot1.png";
import dot2 from "../images/dot2.png";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const chartData = [
  {
    name: "Failed",
    value: 20,
    fill: "#F43609",
  },
  {
    name: "Ordered",
    value: 60,
    fill: "#FFD600",
  },
  {
    name: "Pending",
    value: 80,
    fill: "#EC6545",
  },
];

const RadialChart = () => {
  return (
    <Card className="p-4 border-2 mt-5" style={{ borderRadius: "15px" }}>
      <Row>
        <Col lg={4}>
          <p className="order-label-1">Pie Chart</p>
        </Col>
        <Col lg={8} className="align-self-center">
          <div className="d-flex justify-content-end">
            <p className="chart-color-failed chart-text me-4">
              <img src={dot} alt="dot" className="me-1 mb-1" /> Failed
            </p>
            <p className="chart-color-Ordered chart-text me-4">
              <img src={dot1} alt="dot" className="me-1 mb-1" /> Ordered
            </p>
            <p className="chart-color-Pending chart-text">
              <img src={dot2} alt="dot" className="me-1 mb-1" /> Pending
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <RadialBarChart
            cx="30%"
            cy="50%"
            innerRadius="30%"
            outerRadius="100%"
            barSize={15}
            data={chartData}
            width={500}
            height={300}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              dataKey={"value"}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="value"
              angleAxisId={0}
              data={chartData}
            />
          </RadialBarChart>
        </Col>
        <Col lg={7} className="align-self-center">
          <Row>
            {chartData.map((data) => (
              <Col lg={4}>
                <p className="chart-head text-center">{data.name}</p>
                <h1
                  className="text-center chart-percent"
                  style={{ color: data.fill }}
                >
                  {data.value}%
                </h1>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default RadialChart;
