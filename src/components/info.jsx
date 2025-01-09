function Info(){
  const physcialItem = [{
    item: 'map-marker',
    str: 'Lorem Ipsum is simply dummy text'
  },{
    item:'phone',
    str:'+02 1234567890'
  },{
    item:'envelope',
    str:'demo@gmail.com'
  }]
  
  const recyclePlease = physcialItem.map(item => (
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

  const ElonMusk = socialMedia.map(media => 
    (<a href="" key={media}>
    <i className={`fa fa-${media}`} aria-hidden="true"></i>
    </a>)
  )












  return(
    <section className="info_section ">
        <div className="container">
          <h4>
            Get In Touch
          </h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  {recyclePlease}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-box">
          <h4>
            Follow Us
          </h4>
          <div className="box">
            {ElonMusk}
          </div>
        </div>
    </section>
    )
}
export default Info;