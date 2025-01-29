import { useTranslation } from "react-i18next";
import i18n from '../utils/i18n';

function Footer(){
  
  const {t} = useTranslation();

  console.log(t('footer.rights'));
    return(
        <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayDateYear"></span> {t('footer.rights')}
            <a href="https://html.design/">{t('footer.lefts')}</a>
          </p>
        </div>
      </footer>
    )
}
export default Footer