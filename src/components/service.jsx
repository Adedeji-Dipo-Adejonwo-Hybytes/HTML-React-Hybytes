import { useTranslation } from "react-i18next";

function Service(){
  const {t} = useTranslation();

  const type = [
    {type :t('service.maintainance'),
      img :"images/s1.png"
    },{
      type:t('service.electrical'),
      img: "images/s2.png"
    },{
      type: t('service.plumbing'),
      img: "images/s3.png"
    }
  ]
  const serviceList = type.map(item => (
    <div className="col-sm-6 col-md-4 mx-auto">
    <div className="box ">
      <div className="img-box">
        <img src={item.img} alt="" />
      </div>
      <div className="detail-box">
        <h5>
          {item.type}
        </h5>
        <p>
        {t('service.text')}
        </p>
      </div>
    </div>
  </div>
  ))
  return(
        <section className="service_section layout_padding">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2> {t('service.services')} </h2>
          </div>
          <div className="row">
            {serviceList}
          </div>
          <div className="btn-box">
            <a href="">
            {t('service.viewMore')}
            </a>
          </div>
        </div>
      </section>
    )
}
export default Service;