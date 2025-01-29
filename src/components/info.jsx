import { useTranslation } from "react-i18next";

function Info(){
  const {t} = useTranslation();

  const physcialItem = [{
    item: 'map-marker',
    str: t('info.dummy')
  },{
    item:'phone',
    str:t('info.phone')
  },{
    item:'envelope',
    str:t('info.envelope')
  }]
  
  const itemList = physcialItem.map(item => (
  <div className="col-md-4">
    <a href="">
      <div className="item ">
        <div className="img-box ">
          <i className={`fa fa-${item.item}`} aria-hidden="true"></i>
        </div>
        <p>
          {item.str}
        </p>
      </div>
    </a>
  </div>
  ))
  
  
  const socialMedia = ['facebook','twitter','youtube','instagram'];

  const mediaList = socialMedia.map(media => 
    (<a href="" key={media}>
    <i className={`fa fa-${media}`} aria-hidden="true"></i>
    </a>)
  )

  return(
    <section className="info_section ">
        <div className="container">
          <h4>
          {t('info.getInTouch')}
          </h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  {itemList}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-box">
          <h4>
          {t('info.followUs')}
          </h4>
          <div className="box">
            {mediaList}
          </div>
        </div>
    </section>
    )
}
export default Info;