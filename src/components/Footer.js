import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
    return (
        <div class="foot" style={{background:"black", color:"white"}}>
            <Container fluid>
                <Row style={{padding:"1%",backgroundColor:"rgb(49, 48, 53)"}}>
                    <Col xs="auto" style={{marginLeft:"100px"}}>
                        <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="Logo"/>
                    </Col>
                    <Col xs={1} style={{padding:"0"}}>
                        <div style={{display:"flex",fontWeight:"600",textAlign:"center",marginTop:"5px"}}>List Your Show</div>
                    </Col>
                    <Col xs={6}>
                        <div style={{marginTop:"5px",fontWeight:"400"}}>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</div>
                    </Col>
                    <Col xs={3} style={{display:"flex", flexDirection:"row-reverse" ,paddingRight:"50px"}}>
                        <Button style={{background:"rgb(236, 94, 113)",border:"none",borderRadius:"3px",padding:"10px 25px"}}>Contact Today!</Button>
                    </Col>
                </Row>
                <Row style={{textAlign:"center", padding:"3%", background:"grey"}}>
                    <Col>
                        Col 1
                    </Col>
                    <Col>
                        Col 2
                    </Col>
                    <Col>
                        Col 3
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;