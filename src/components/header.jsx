import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

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
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About"> About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Service">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
}
export default Header;