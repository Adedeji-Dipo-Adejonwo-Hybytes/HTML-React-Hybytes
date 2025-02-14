import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore"; 

function Contact(){
  const { t } = useTranslation();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const forum = [
    { id: 'text', name: 'name', holder: 'Name', holderString: t('contact.name') },
    { id: 'text', name: 'phone', holder: 'Phone Number', holderString: t('contact.phoneNumber') },
    { id: 'email', name: 'email', holder: 'Email', holderString: t('contact.email') },
    { id: 'text', name: 'message', holder: 'Message', holderString: t('contact.message') }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await addDoc(collection(db, 'contacts'), {
        ...data,
        timestamp: new Date().toISOString()
      });
      setSuccess(true);
      e.target.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const forumMap = forum.map((form) => (
    <div key={form.name}>
      <input
        type={form.id}
        name={form.name}
        placeholder={form.holderString}
        className={form.holder === "Message" ? "message-box" : ""}
        required
      />
    </div>
  ));

  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>{t('contact.contactUs')}</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {forumMap}
              <div className="d-flex">
                <button type="submit" disabled={submitting}>
                  {submitting ? t('contact.sending') : t('contact.send')}
                </button>
              </div>
              {success && <p className="success-message">{t('contact.success')}</p>}
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <div className="map">
                <div id="googleMap" style={{ width: "100%", height: "100%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;