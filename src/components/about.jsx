import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function About(){
  const {t} = useTranslation();

  return (
    <section className="about_section layout_padding-bottom">
    <Container>
      <Row>
        <Col lg={5} md={6}>
          <div className="detail-box">
            <h2>
              {t('about.aboutUs')}
            </h2>
            <p>
            {t('about.thereAre')}
            </p>
            <Button variant="primary" href="">
            {t('about.readMore')}
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

