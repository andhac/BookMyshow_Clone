import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import axios from "axios";
function AllFetch() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/mov');
                console.log(response);
                setData(response.data); // Also, you probably want to set the response data, not the response object itself
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // async function getMovies() {
    //     try {
    //         const response = await axios.get('http://localhost:4000/mov');
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    return (
        <div>
            <Container  style={{ padding:"2%",background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov)=>
                        <Col onClick={()=>window.location.href="/mov/"+mov._id} id={mov._id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                            <Card style={{width:"75%", borderRadius:"10px",height:"100%"}}>
                                <Card.Img variant="top" src={mov.img} style={{width:"100%",height:"80%"}} />
                                <Card.Body>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>{mov.gener}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}
export default AllFetch;