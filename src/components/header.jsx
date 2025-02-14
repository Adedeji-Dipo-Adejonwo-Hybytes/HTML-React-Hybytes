import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useState } from 'react';


function Header(){
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const pages = [
    {id:"Home", link:`/${i18n.language}`, idString: t('header.home')},
    {id:"About", link:`/About/${i18n.language}`, idString: t('header.about')},
    {id:"Service", link:`/Services/${i18n.language}`, idString: t('header.service')},
    {id:"Contact Us", link:`/Contact/${i18n.language}`, idString: t('header.contactUs')}
  ];

  const pagesMap = pages.map(page => (
    <li className="nav-item active" key={page.id}>
      <Link className="nav-link" to={page.link}>
        {page.idString}
        {page.id === "Home" ? <span className="sr-only">(current)</span> : null}
      </Link>
    </li>
  ));

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    navigate(`/${lng}`)
  };

  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_nav">
            <a href="tel:+01123455678990">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                {t('header.call')}
              </span>
            </a>
            <a href="mailto:demo@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                {t('header.email')}
              </span>
            </a>
            <div className="language-selector">
              <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)} >
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>
                {t('header.inance')}
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