import { Container, Row } from "react-bootstrap";

function About(){
  return (
    <section className="about_section layout_padding-bottom">
    <Container>
      <Row>
        <col lg={5} md={6}>
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
        </col>
        <col lg={7} md={6}>
          <div className="img-box">
            <img src="images/about-img.jpg" alt="" className="img-fluid"/>
          </div>
        </col>
      </Row>
    </Container>
  </section>
  )
}

