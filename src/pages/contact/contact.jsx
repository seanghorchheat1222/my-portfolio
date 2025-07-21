import styles from './contact.module.css';
import img1 from '../../assets/images/contactimage.png';
import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const [currentTime, setCurrentTime] = useState('');
  const form = useRef(); 

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
      'service_5xvk7t7',    
      'template_hgfk9wh',   
      form.current,
      'g3gMZuLpaJCyW5AAc'   
    )
    .then((result) => {
        alert('Message sent successfully!');
        console.log(result.text);
        form.current.reset(); 
    })
    .catch((error) => {
        alert('Failed to send message');
        console.log(error.text);
    });
  };

  return (
<div>
<div style={{ position: 'relative' }}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"   
preserveAspectRatio="none"
style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '550px',
      zIndex: 0, 
    }}><path fill="#8DD5F2" fill-opacity="1" d="M0,256L1440,160L1440,0L0,0Z"></path></svg>
  </div>

  <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <h1 style={{color: 'white'}}>Hi, how are you?</h1>
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
                  style={{ float: 'right'}}
                  className={styles.btnSubmit}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <h1 className={styles.currenttime} style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold', color: 'white' }}>
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

</div>



  
  );
};

export default Contact;
