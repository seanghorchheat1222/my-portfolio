import styles from './contact.module.css';
import img1 from '../../assets/images/contactimage.png';
import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com'; // ✅ Import EmailJS

const Contact = () => {
  const [currentTime, setCurrentTime] = useState('');
  const form = useRef(); // ✅ Create form ref

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${minutes}${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5xvk7t7',    // 🔁 Replace with your actual Service ID
      'template_hgfk9wh',    // 🔁 Replace with your actual Template ID
      form.current,
      'g3gMZuLpaJCyW5AAc'   // 🔁 Replace with your actual Public Key
    )
    .then((result) => {
        alert('Message sent successfully! ✅');
        console.log(result.text);
        form.current.reset(); // Optional: clear form after submission
    })
    .catch((error) => {
        alert('Failed to send message ❌');
        console.log(error.text);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h1 style={{color: '#8DD5F2'}}>Hi, how are you!</h1>
          <div className="mt-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              className={`${styles.formcontact} d-flex gap-3 flex-column p-4`}
            >
              <div className="form-group">
                <label style={{ color: 'white' }}>Name</label>
                <input className="form-control" name="user_name" required />
              </div>
              <div className="form-group">
                <label style={{ color: 'white' }}>Email</label>
                <input className="form-control" name="user_email" required />
              </div>
              <div className="form-group">
                <label style={{ color: 'white' }}>Description</label>
                <textarea className="form-control" name="message" style={{ height: '300px' }} required />
              </div>
              <div>
                <button
                  style={{ float: 'right' }}
                  type="submit"
                  className={styles.btnSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <h1 className={styles.currenttime} style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold', color: '#8DD5F2' }}>
            {currentTime}
          </h1>
          <div className="d-flex align-items-center justify-content-center">
            <img className={`${styles.img1} img-fluid`} src={img1} alt="Contact Visual" />
          </div>
        </div>
      </div>

      <div className="col-12 d-flex justify-content-center align-items-center flex-column mt-3">
        <div className="d-flex gap-2">
          <a href="https://github.com/horspaz064" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
            <i className="bi bi-github fs-1"></i>
          </a>
          <a href="https://t.me/chheatseanghor3333" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
            <i className="bi bi-telegram fs-1"></i>
          </a>
        </div>
        <p>Copyright ©️2025</p>
      </div>
    </div>
  );
};

export default Contact;
