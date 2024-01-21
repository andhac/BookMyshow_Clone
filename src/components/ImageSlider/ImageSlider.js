
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
function ImageSlider() {
    return (
        <div style={{padding:"15px 0" ,marginBottom:"5px"}} >
            <Carousel  data-bs-theme="dark" >
                <Carousel.Item className="first">
                    <img
                        className="d-block w-30 img1"
                        src="https://assets-in.bmscdn.com/promotions/cms/creatives/1704555606658_dldesk.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item className="first">
                    <img
                        className="d-block w-30"
                        src="https://assets-in.bmscdn.com/promotions/cms/creatives/1705583821866_invokingw.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="first">
                    <img
                        className="d-block w-30"
                        src="https://assets-in.bmscdn.com/promotions/cms/creatives/1703930188975_web.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="first">
                    <img
                        className="d-block w-30"
                        src="https://assets-in.bmscdn.com/promotions/cms/creatives/1704901246379_ccdesk.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImageSlider;
