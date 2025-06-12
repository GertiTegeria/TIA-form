import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import HomePageImage from "../../assets/HomePage.jpg";
import files from "../../assets/files.svg";
import axios from "axios";

const HomePage = () => {
  const [jobsPositions, setJobsPositions] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://tia.digitalapps0.com/ws/rest/com.axelor.apps.talent.db.JobPosition"
      )
      .then((response) => {
        setJobsPositions(response.data.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(jobsPositions);

  return (
    <div className={styles.container}>
      <div
        className={styles.heroSection}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url(${HomePageImage})`,
        }}
      >
        <div className={styles.heroOverlay}>
          <h3 style={{ color: "#DB0035", marginBottom: "10px" }}>Company</h3>
          <h1 className={styles.heroTitle}>Jobs & careers</h1>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.mainTitle}>
            Join Our Team – Application Procedure
          </h2>
          <p className={styles.subtitle}>
            We look forward to welcoming new talent to our team!
          </p>

          <div className={styles.jobListings}>
            {jobsPositions.map((job) => (
              <div
              onClick={() => {
                const jobTitle = job.jobTitle;
                const url = `/JobDetails?jobTitle=${encodeURIComponent(jobTitle)}`;
                window.open(url, "_blank");
              }}
            
                key={job.id}
                className={styles.jobItem}
              >
                <div className={styles.jobIcon}>
                  <img src={files} alt="files" />
                </div>
                <span className={styles.jobTitle}>{job.jobTitle}</span>
                <div className={styles.jobArrow}>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
