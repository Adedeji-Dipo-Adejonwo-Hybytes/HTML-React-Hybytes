import { Container, Row, Col } from "react-bootstrap";
const clientList = ["images/client-1.jpg", "images/client-2.jpg" ]
import { useTranslation } from "react-i18next";

const clientMap = [clientList.map(client => (
  <div className="item">
  <div className="box">
    <div className="client_id">
      <div className="img-box">
        <img src={client} alt=""/>
      </div>
      <div className="client_detail">
        <div className="client_info">
          <h6>
          t('client.name')
          </h6>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </div>
        <i className="fa fa-quote-left" aria-hidden="true"></i>
      </div>
    </div>
    <div className="client_text">
      <p>
      t('client.chunks')
      </p>
    </div>
  </div>
</div> 
))]

function Client(){
    const {t} = useTranslation();
    return(
        <section className="client_section ">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
            t('client.clents')
            </h2>
          </div>
          <div className="carousel-wrap layout_padding2-top ">
            <div className="owl-carousel">
              {clientMap}
              {clientMap}
              {clientMap}
            </div>
          </div>
        </div>
      </section>
    )
}
export default Client;