import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: { translation:{
    about:{
      "aboutUs": "About us",
      "thereAre":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
      "readMore":"Read More"
    },
    client:{
      "name": "Jorch morik",
      "chunks": "chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum",
      "clients": "What Our Clients Say"
    },
    contact:{
      "contactUs":"Contact Us",
      "send": "SEND",
      'name':"Name",
      "email":"Email",
      "phoneNumber":"Phone Number",
      "message":"Message"
    },
    feature:{
      "repair": "Repair",
      "improve":"Improve",
      "maintain":"Maintain"
    },
    footer: {
      rights:'All Rights Reserved By',
      "lefts": "Free Html Templates "
    },
    header: {
      "call":"Call : +01 123455678990",
      "email":"Email : demo@gmail.com",
      "inance":"Inance",
      "home":"Home",
      "about":"About",
      "service":"Service",
      "contactUs":"Contact Us"
    },
    info:{
      "dummy": 'Lorem Ipsum is simply dummy text',
      "phone":"'+02 1234567890'",
      "envelope":"'demo@gmail.com'",
      "getInTouch":"Get In Touch",
      "followUs":"Follow Us"
    },
    professional:{
      "provide":"We Provide Professional <br/> Home Services.",
      "random":"randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly",
      "readMore":"Read More"
    },
    service:{
      "services":"Our Services",
      'maintenance':'Maintenance',
      "electrical":'Electrical',
      'plumbing':'Plumbing',
      "text":"when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
      "viewMore":"View More"
    },
    slider:{
      repair : "Repair and <br/> Maintenance <br/> Services",
      fakeText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.",
      contactUs:"Contact Us"
    },}
  },
  ar: {translation:{
    about:{
      "aboutUs": "معلومات عنا",
      "thereAre":"هناك العديد من التنويعات المتاحة لنصوص لوريم إبسوم، ولكن معظمها تعرض للتغيير بشكل ما، سواء عن طريق الدعابة المحقونة أو الكلمات المعشاة",
      "readMore":"اقرأ المزيد"
    },
    client:{
      "name": "جورج موريك",
      "chunks": "قطع حسب الضرورة، مما يجعله أول مولد حقيقي على الإنترنت. يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، مع مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إبسوم",
      "clients": "ماذا يقول عملاؤنا"
    },
    contact:{
      "contactUs":"اتصل بنا",
      "send": "إرسال",
      "name":"الاسم",
      "email":"البريد الإلكتروني",
      "phoneNumber":"رقم الهاتف",
      "message":"الرسالة"
    },
    feature:{
      "repair": "إصلاح",
      "improve":"تحسين",
      "maintain":"صيانة"
    },
    footer: {
      rights:"جميع الحقوق محفوظة لـ",
      "lefts": "قوالب HTML المجانية"
    },
    header: {
      "call":"اتصل : +01 123455678990",
      "email":"البريد الإلكتروني : demo@gmail.com",
      "inance":"إيننس",
      "home":"الرئيسية",
      "about":"معلومات",
      "service":"خدمات",
      "contactUs":"اتصل بنا"
    },
    info:{
      "dummy": 'لوريم إبسوم هو نص نموذجي',
      "phone":"'+02 1234567890'",
      "envelope":"'demo@gmail.com'",
      "getInTouch":"كن على تواصل",
      "followUs":"تابعنا"
    },
    professional:{
      "provide":"نقدم خدمات <br/> منزلية احترافية.",
      "random":"كلمات عشوائية لا تبدو مقنعة على الإطلاق. إذا كنت ستستخدم فقرة من لوريم إبسوم، تأكد من عدم وجود شيء محرج في وسط النص",
      "readMore":"اقرأ المزيد"
    },
    service:{
      "services":"خدماتنا",
      'maintenance':'صيانة',
      "electrical":'كهرباء',
      'plumbing':'سباكة',
      "text":"عند النظر إلى التخطيط. الهدف من استخدام لوريم إبسوم هو أنه يحتوي على توزيع طبيعي",
      "viewMore":"عرض المزيد"
    },
    slider:{
      "repair" : "خدمات الإصلاح <br/> والصيانة",
      "fakeText": "لوريم إيبسوم دولور سيت أميت كونسيكتيتور أديبيسينج إليت. من يحب مشقة الحصول على أدبيات. كيف يمكن لهذه المتاعب أن تكشف عن أي شيء؟",
      "contactUs":"اتصل بنا"
    },
  }}
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
      useSuspense: false
    }
  });

export default i18n;
