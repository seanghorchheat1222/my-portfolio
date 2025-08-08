import styles from './home.module.css'
import myimg from '../../assets/images/5x5.jpg';
import mycv from '../../assets/images/mycv.png';

const Home = () =>
  <div >
    <div className="container">
      <div className={`row ${styles.reversposition}`}>
        <div className={`col-lg-6 col-md-6 col-sm-12 mt-5 ${styles.contextprofile}`}>
          <h1 style={{ fontWeight: '500',color: 'red'}}>Hi, I'm Seanghor, <span style={{color: '#4AA2D9'}}>Web Developer</span></h1>
          <p><span style={{ color: '#555555' }}>I am a fourth-year Computer Science student at the Royal University of Phnom Penh with focus on</span> Web Development.</p>
          <button className={styles.btnDownloadcv}><a href={mycv} download="Resume" style={{color: 'white', textDecoration: 'none'}}>Download CV</a></button>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <div className="d-flex justify-content-center">
            <div className={styles.profilepicture}>
              <img src={myimg} className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={`mt-4 ${styles.skills}`}>
      <h1 style={{ textAlign: 'center', color: 'white', }} >Skills</h1>
      <div className="container">
        <div className={`${styles.skillswrapper} row`}>

          <div className={`${styles.coreskill} col-lg-6 col-md-6 col-sm-12`}>
            <div style={{gap: '20px'}} className={`d-flex align-items-center ${styles.coreandskill}`}>
              <i style={{ color: 'white', fontSize : '40px'}} className={`bi bi-display-fill mb-3 ${styles.icons}`}></i>
              <h3 style={{ color: 'white' }} className={styles.textcontext}>Core/Basic skills</h3>
            </div>
            <div className="d-flex flex-column gap-2 col-lg-10 col-md-12 col-12">
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>HTML</p></div>
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>CSS</p></div>
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>JavaScript</p></div>
            </div>
          </div>

          <div className={`${styles.databasemanagement} col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center`}>
            <div className={`${styles.databaseandmanagement}`}>
              <i style={{ color: 'white', fontSize : '40px' }} className="bi bi-database-fill mb-3"></i>
              <h3 style={{ color: 'white' }} className={styles.textcontext} >Database & Management</h3>
            </div>
            <div className="d-flex flex-column gap-2 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>MySql Workbench</p></div>
            </div>
          </div>

          <div className={`${styles.frameworklibraries} col-lg-6 col-md-6 col-sm-12 `}>
            <div style={{gap: '20px'}} className={`d-flex align-items-center ${styles.frameworkandlibraries}`} >
              <i style={{ color: 'white',fontSize : '40px' }} className="bi bi-gear-fill mb-3"></i>
              <h3 style={{ color: 'white' }} className={styles.textcontext} >Framework & Libraries</h3>
            </div>
            <div className="d-flex flex-column gap-2 col-lg-10 col-md-12 col-12">
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>Angular(TypeScript)</p></div>
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>React(JavaScript)</p></div>
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>JQuery</p></div>
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>Bootstrap</p></div>
            </div>
          </div>

          <div className={`${styles.tooldevops} col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center`}>
            <div className={styles.toolandevops}>
              <i style={{ color: 'white', fontSize : '40px' }} className="bi bi-tools mb-3"></i>
              <h3 style={{ color: 'white' }} className={styles.textcontext} >Tools & Devops</h3>
            </div>
            <div className="d-flex flex-column gap-2 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>GitHub</p></div>
            </div>
          </div>

          <div className={`${styles.backendtechnologies} col-lg-6 col-md-6 col-sm-12 `}>
            <div style={{gap: '20px'}} className={`${styles.backendandtechnologies} d-flex align-items-center`}>
              <i style={{ color: 'white', fontSize : '40px' }} className="bi bi-clouds-fill mb-3"></i>
              <h3 style={{ color: 'white' }} className={styles.textcontext} >Backend Technologies</h3>
            </div>
            <div className="d-flex flex-column gap-2 col-lg-10 col-md-12 col-12">
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>PHP</p></div>
              <div className={styles.boxskill}><p style={{ color: '#555555' }}>C#</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-4">
      <h1 style={{ textAlign: 'center', color: '#4AA2D9', }} >Creative & Technical Skills</h1>
      <div className="row gap-5 d-flex justify-content-center mt-4">
        <div className={`${styles.box1} col-lg-3 col-md-4 col-sm-10 col-10`} >
          <div className="d-flex gap-3 align-items-center flex-column">
            <i style={{ color: 'white', fontSize: '100px' }} className="bi bi-display-fill"></i>
            <h3 style={{ color: 'white' }}>Web Development</h3>
            <p style={{ color: 'white' }}>HTML, CSS, JS</p>
          </div>
        </div>

        <div className={`${styles.box2} col-lg-3 col-md-4 col-sm-10 col-10`} >
          <div className="d-flex gap-3 align-items-center flex-column">
            <i style={{ color: 'white', fontSize: '100px' }} className="bi bi-display"></i>
            <h3 style={{ color: 'white' }}>UX/UI Design</h3>
            <p style={{ color: 'white' }}>Figma</p>
          </div>
        </div>

        <div className={`${styles.box3} col-lg-3 col-md-4 col-sm-10 col-10`} >
          <div className="d-flex gap-3 align-items-center flex-column">
            <i style={{ color: 'white', fontSize: '100px' }} className="bi bi-phone"></i>
            <h3 style={{ color: 'white' }}>Mobile Development</h3>
            <p style={{ color: 'white' }}>Flutter</p>
          </div>
        </div>

      </div>
    </div>

    <div className="col-12 d-flex justify-content-center align-items-center flex-column mt-3 ">
      <div className="d-flex gap-2">
        <div>
          <a href="https://github.com/seanghorchheat1222" target='_blank' style={{color: 'black'}}>
           <i className="bi bi-github fs-1"></i>
          </a>
        
        </div>
        <div>
            <a href="https://t.me/chheatseanghor3333" target='_blank' style={{color: 'black'}}>
          <i className="bi bi-telegram fs-1"></i>
          </a>
        </div>
      </div>
      <div><p style={{fontSize: '12px'}}>Copyright ©️2025</p></div>
    </div>

  </div>







export default Home