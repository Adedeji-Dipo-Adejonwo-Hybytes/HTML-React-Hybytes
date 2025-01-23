import { useTranslation } from "react-i18next";

function Contact(){
  const {t} = useTranslation();
  const forum = [{id:'text', holder:'Name', holderString:t('contact.contactUs')},
    {id:'text', holder:'Phone Number', holderString:t('contact.phoneNumber')},
    {id:'email', holder:'Email', holderString:t('contact.email')},
    {id:'text', holder:'Message', holderString:t('contact.message')}
  ]

  const forumMap = forum.map(form =>(
    <div>
    <input type={form.id} placeholder={form.holder} className={form.holder === "Message"? "message-box":""}/>
    </div>
  ))


  return(
        <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Contact Us
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form action="">
                {forumMap}
                <div className="d-flex ">
                  <button>
                    SEND
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap" style={{width:"100%",height:"100%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Contact;