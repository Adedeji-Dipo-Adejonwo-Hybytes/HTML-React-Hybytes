import { useTranslation } from "react-i18next";

function Footer(){
  
  const {t} = useTranslation();
    return(
        <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayDateYear"></span> t('footer.rights')
            <a href="https://html.design/">t('footer.lefts')</a>
          </p>
        </div>
      </footer>
    )
}
export default Footer