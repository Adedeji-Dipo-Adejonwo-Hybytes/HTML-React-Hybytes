import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
const pages = [{id:"Home", link:"/"},
  {id:"About",link:"/About"},
  {id:"Service",link:"/Services"},
  {id:"Contact Us",link:"Contact"}
]
const pagesMap = pages.map(pages => (
  <li className="nav-item active" key={pages.id}>
  <Link className="nav-link" to={pages.link}>{pages.id}
  {pages.id === "Home"?<span className="sr-only">(current)</span>:null}</Link>
</li>
))


function Header(){
    return( //remember div Hero Name
    <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="contact_nav">
              <a href="tel:+01123455678990">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call : +01 123455678990
                </span>
              </a>
              <a href="mailto:demo@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  Email : demo@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>
                  Inance
                </span>
              </a>
  
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""> </span>
              </button>
  
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  {pagesMap}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
}
export default Header;