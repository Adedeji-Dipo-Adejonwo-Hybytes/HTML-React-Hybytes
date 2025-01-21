import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    about:{
      "About Us": "About us",
      "There Are":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
      "Read More":"Read More"
    },
    client:{
      "Name": "Jorch morik",
      "Chunks": "chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum",
      "Clients": "What Our Clients Say"
    },
    contact:{
      "Contact Us":"Contact Us",
      "Send": "SEND",
      "Name":"Name",
      "Email":"Email",
      "Phone Number":"Phone Number",
      "Message":"Message"
    },
    feature:{
      "Repair": "Repair",
      "Improve":"Improve",
      "Maintain":"Maintain"
    },
    footer: {
      "Rights":"&copy; <span id=\"displayDateYear\"></span> All Rights Reserved By <a href=\"https://html.design/\">Free Html Templates</a>\" "
    },
    header: {
      "Call":"Call : +01 123455678990",
      "Email":"Email : demo@gmail.com",
      "Inance":"Inance",
      "Home":"Home",
      "About":"About",
      "Service":"Service",
      "Contact Us":"Contact Us"
    },
    info:{
      "dummy": 'Lorem Ipsum is simply dummy text',
      "phone":"'+02 1234567890'",
      "envelope":"'demo@gmail.com'",
      "get in touch":"Get In Touch",
      "Follow Us":"Follow Us"
    },
    professional:{
      "Provide":"We Provide Professional",
      "services":"Home Services.",
      "Random":"randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly",
      "Read More":"Read More"
    },
    service:{
      "services":"Our Services",
      'Maintenance':'Maintenance',
      "Electrical":'Electrical',
      'Plumbing':'Plumbing',
      "text":"when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
      "View More":"View More"
    },
    slider:{
      "Repair" : "Repair and <br/> Maintenance <br/> Services",
      "Fake text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.",
      "Contact Us":"Contact Us"
    },
  },
  ar: {
    about:{

    },
    client:{

    },
    contact:{

    },
    feature:{

    },
    footer: {

    },
    header: {
        
    },
    info:{

    },
    professional:{

    },
    servicee:{

    },
    slider:{

    },
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    // Uncomment if you want RTL support based on language
    react: {
      useSuspense: true
    }
  });

export default i18n;
