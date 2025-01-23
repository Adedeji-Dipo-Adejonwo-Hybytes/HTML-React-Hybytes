import { useTranslation } from "react-i18next";

function Slider(){
  const {t} = useTranslation();

    return(
    <section className="slider_section ">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="detail-box">
                <h1 dangerouslyUseHtmlString={true}>
                t('slider.repair')
                </h1>
                <p>
                t('slider.fakeText')
                </p>
                <a href="">
                t('slider.contactUs')
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/slider-img.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Slider;