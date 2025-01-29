import { useTranslation } from "react-i18next";

function Professional(){
  const {t} = useTranslation();

    return(
        <section className="professional_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/professional-img.png" alt=""/>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="detail-box">
                <h2 dangerouslySetInnerHTML={{__html:t('professional.provide')}}/>
                <p>
                {t('professional.random')}
                </p>
                <a href="">
               { t('professional.readMore')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Professional;