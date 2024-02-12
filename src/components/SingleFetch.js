import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function SingleFetch() {
  const { movId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const response = await axios.get("http://localhost:4000/mov/" + movId);
        setData([response.data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSingle();
  }, []);

  return (
    <div>
      <Container style={{ padding: "2%", background: "pink" }}>
        <Row style={{ textAlign: "center" }}>
          {data.map((mov) => (
            <Col
              id={mov._id}
              key={mov._id}
              xs={6}
              md={4}
              lg={3}
              style={{ marginBottom: "2%" }}
            >
              <Card
                style={{ width: "75%", borderRadius: "10px", height: "100%" }}
              >
                <Card.Img
                  variant="top"
                  src={mov.img}
                  style={{ width: "100%", height: "80%" }}
                />
                <Card.Body>
                  <Card.Title>{mov.title}</Card.Title>
                  <Card.Text>{mov.gener}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default SingleFetch;
