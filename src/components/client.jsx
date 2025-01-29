import { useTranslation } from "react-i18next";

function Client(){
    const {t} = useTranslation();
    const clientList = ["images/client-1.jpg", "images/client-2.jpg"];

    const clientMap = clientList.map((client, index) => (
        <div className="item" key={client}>
            <div className="box">
                <div className="client_id">
                    <div className="img-box">
                        <img src={client} alt=""/>
                    </div>
                    <div className="client_detail">
                        <div className="client_info">
                            <h6>
                            {t('client.name')}
                            </h6>
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="fa fa-star" aria-hidden="true"></i>
                            ))}
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="client_text">
                    <p>
                    {t('client.chunks')}
                    </p>
                </div>
            </div>
        </div> 
    ));

    return(
        <section className="client_section ">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                    {t('client.clients')}
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