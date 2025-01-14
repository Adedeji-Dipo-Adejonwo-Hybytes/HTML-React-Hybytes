function Service(){
  const type = [
    {type :'Maintenance',
      img :"images/s1.png"
    },{
      type:'Electrical',
      img: "images/s2.png"
    },{
      type: 'Plumbing',
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
          when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal
        </p>
      </div>
    </div>
  </div>
  ))
  return(
        <section className="service_section layout_padding">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2> Our Services </h2>
          </div>
          <div className="row">
            {serviceList}
          </div>
          <div className="btn-box">
            <a href="">
              View More
            </a>
          </div>
        </div>
      </section>
    )
}
export default Service;