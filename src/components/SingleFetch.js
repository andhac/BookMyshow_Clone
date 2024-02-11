import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";
import {useParams} from "react-router-dom";
function SingleFetch() {
    const{movId}= useParams();
    console.log(movId);
    return (
        <div>
            <Container style={{ padding:"2%",background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov)=> {
                            if(mov.id===movId) {
                                console.log(mov.id);
                                return(
                                    <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom: "2%"}}>
                                        <Card style={{width: "75%", borderRadius: "10px", height: "100%"}}>
                                            <Card.Img variant="top" src={mov.img}
                                                      style={{width: "100%", height: "80%"}}/>
                                            <Card.Body>
                                                <Card.Title>{mov.title}</Card.Title>
                                                <Card.Text>{mov.gener}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )}
                        }
                    )}

                </Row>
            </Container>
        </div>
    );
}
export default SingleFetch;