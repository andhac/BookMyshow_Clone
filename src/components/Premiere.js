import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Premiere(){
    return(
        <div style={{backgroundColor:"rgb(43, 49, 72)",padding:"2%"}}>
            <img style={{margin:"0 100px"}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="Premier"/>
            <Carousel style={{marginLeft:"100px" }}>
                <Carousel.Item>
                    <CardGroup >
                        {/* Add 5 Cards here */}
                        <Card>
                            <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00378435-thlwsldhjh-portrait.jpg"/>

                        </Card>
                        <Card style={{border:"none",height:"100%" ,width:"10px"}} >
                            <Card.Img style={{borderRadius:"10px"}} variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTc3LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-camxddtwnq-portrait.jpg" />
                            <Card.Body>
                                <Card.Title>Fighter</Card.Title>
                                <Card.Text style={{color:"#666666"}}>
                                    Action/Thriller
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card> <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00378435-thlwsldhjh-portrait.jpg"/></Card>
                        <Card> <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00378435-thlwsldhjh-portrait.jpg"/></Card>
                        <Card> <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00378435-thlwsldhjh-portrait.jpg"/></Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                        {/* Add 3 Cards here */}
                        <Card style={{border:"none",height:"100%" ,width:"10px"}} >
                            <Card.Img style={{borderRadius:"10px"}} variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTc3LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-camxddtwnq-portrait.jpg" />
                            <Card.Body>
                                <Card.Title>Fighter</Card.Title>
                                <Card.Text style={{color:"#666666"}}>
                                    Action/Thriller
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card> <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00378435-thlwsldhjh-portrait.jpg"/></Card>
                        <Card> <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00378435-thlwsldhjh-portrait.jpg"/></Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Premiere;