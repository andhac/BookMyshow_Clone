import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Recommended() {
    return (
        <div style={{padding:"2%",background:"#0000", marginLeft:"100px"}}>
            <h3 style={{color:"#333333",fontWeight:"bold",paddingBottom:"10px"}}>Recommended Movies</h3>
            <CardGroup style={{display:"flex",gap:"1px" }}>
                <Card style={{border:"none",height:"100%" ,width:"10px"}} >
                    <Card.Img style={{borderRadius:"10px"}} variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTc3LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-camxddtwnq-portrait.jpg" />
                    <Card.Body>
                        <Card.Title>Fighter</Card.Title>
                        <Card.Text style={{color:"#666666"}}>
                           Action/Thriller
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card style={{border:"none"}}>
                    <Card.Img style={{borderRadius:"10px"}} variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA2LjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00348408-qnjdcqjalj-portrait.jpg" />
                    <Card.Body>
                        <Card.Title>Main Atal Hoon</Card.Title>
                        <Card.Text style={{color:"#666666"}}>
                            Biography/Drama
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card style={{border:"none"}}>
                    <Card.Img style={{borderRadius:"10px"}} variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAyLjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00382971-pvfctplsyn-portrait.jpg" />
                    <Card.Body>
                        <Card.Title>6 9 5 </Card.Title>
                        <Card.Text style={{color:"#666666"}}>
                            Drama
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card style={{border:"none"}}>
                    <Card.Img style={{borderRadius:"10px"}} variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICAzMDguMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311673-xcarhzkvvz-portrait.jpg" />
                    <Card.Body>
                        <Card.Title>Hanu-Man</Card.Title>
                        <Card.Text style={{color:"#666666"}}>
                            Action/Adventure/Fantasy
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card style={{border:"none"}}>
                </Card>

            </CardGroup>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" style={{width:"100%",paddingRight:"150px", padding:"48px 0"}}/>
        </div>
    );
}

export default Recommended;