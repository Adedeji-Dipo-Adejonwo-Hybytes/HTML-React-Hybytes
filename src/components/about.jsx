import { Container, Row, Col, Button } from "react-bootstrap";

function About(){
  return (
    <section className="about_section layout_padding-bottom">
    <Container>
      <Row>
        <Col lg={5} md={6}>
          <div className="detail-box">
            <h2>
              About us
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
            </p>
            <Button variant="primary" href="">
              Read More
            </Button>
          </div>
        </Col>
        <Col lg={7} md={6}>
          <div className="img-box">
            <img src="images/about-img.jpg" alt="" className="img-fluid"/>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
export default About;

