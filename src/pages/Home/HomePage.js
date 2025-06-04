import React from 'react';
import styles from './HomePage.module.css';
import HomePageImage from '../../assets/HomePage.jpg'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const jobPositions = [
    { id: 1, title: 'Receptionist' },
    { id: 2, title: 'Firefighter' },
    { id: 3, title: 'Technical Director' },
    { id: 4, title: 'Commercial Specialist' },
    { id: 5, title: 'Receptionist' },
    { id: 6, title: 'Receptionist' }
  ];
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      
      <div className={styles.heroSection} style={{backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url(${HomePageImage})`}}>
        <div className={styles.heroOverlay}>
          <h3 style={{color:"#DB0035", marginBottom:"10px"}}>Company</h3>
          <h1 className={styles.heroTitle}>Jobs & careers</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.mainTitle}>Join Our Team – Application Procedure</h2>
          <p className={styles.subtitle}>We look forward to welcoming new talent to our team!</p>
          
          {/* Job Listings */}
          <div  className={styles.jobListings}>
            {jobPositions.map((job) => (
              <div onClick={() => navigate('/JobDetails')} key={job.id} className={styles.jobItem}>
                <div className={styles.jobIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.45 2 5 2.45 5 3V21L12 18L19 21V3C19 2.45 18.55 2 18 2H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={styles.jobTitle}>{job.title}</span>
                <div className={styles.jobArrow}>
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;