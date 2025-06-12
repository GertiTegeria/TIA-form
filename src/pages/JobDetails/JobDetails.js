import React from "react";
import styles from "./JobDetails.module.css";
import logo from "../../assets/logo.png";
import chevron from "../../assets/chevron-down.png";
import { useNavigate, useLocation } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const queryParams = new URLSearchParams(location.search);
  const jobTitle = queryParams.get("jobTitle");

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.logoSection}>
          <div>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
        </div>
        <div className={styles.divider}></div>

        <div className={styles.mainContent}>
          <div className={styles.jobHeader}>
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbText}>Jobs & Career</span>
            </div>
            <div className={styles.titleSection}>
              <h1 className={styles.jobTitle}>{jobTitle}</h1>
              <button
                className={styles.applyBtnBottom}
                onClick={() => navigate("/ApplicationForm", {state: {jobTitle}})}
              >
                Apliko
                <img src={chevron} alt="chevron" className={styles.chevron} />
              </button>
            </div>
          </div>

          <div className={styles.jobDescription}>
            <p className={styles.introText}>
              Tirana International Airport SHPK (TIA) is seeking to hire a
              Receptionist who will report to the Human Resources Director of
              the company.
            </p>

            <div className={styles.deadline}>
              <strong>Application Deadline: June 13, 2025.</strong>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                Main tasks and responsibilities of the position:
              </h3>

              <div className={styles.redDivider}></div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>
                  Reception and Information Services
                </h4>
                <ul className={styles.bulletList}>
                  <li>
                    Greet and direct visitors, answer routine inquiries, and
                    provide general information.
                  </li>
                  <li>
                    Answer telephone calls, provide information, respond to
                    inquiries, and direct calls appropriately.
                  </li>
                  <li>
                    Schedule and assist in scheduling appointments, meetings,
                    meeting rooms, and conference calls for management and
                    staff.
                  </li>
                  <li>
                    Prepare refreshments (coffee, tea, water, etc.) for meetings
                    and conferences, especially in the absence of catering
                    staff.
                  </li>
                  <li>
                    Distribute correspondence and other materials to TIA
                    business units promptly.
                  </li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>
                  Administrative Support
                </h4>
                <ul className={styles.bulletList}>
                  <li>
                    Perform simple, routine, and repetitive administrative
                    functions, such as data entry and document management.
                  </li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>
                  Office Supplies Management
                </h4>
                <ul className={styles.bulletList}>
                  <li>
                    Manage the office supplies warehouse, ensure timely
                    fulfillment of supply needs, and perform inventory
                    reconciliation with the HR Specialist in charge of office
                    management.
                  </li>
                  <li>
                    Manage the ordering and distribution of potable water for
                    the office.
                  </li>
                  <li>
                    Assist in coordinating and preparing paperwork during lift
                    asset relocation (e.g., furniture and mobile process).
                  </li>
                  <li>
                    Assist in maintaining the cleanliness and functionality of
                    all TIA offices, warehouses, and social areas.
                  </li>
                  <li>
                    Assist in ordering, receiving, storing, and distributing
                    office supplies, refreshments, and equipment.
                  </li>
                  <li>
                    Assist in managing the usage and maintenance of TIA
                    administrative parking.
                  </li>
                  <li>
                    Assist in the coordination and execution of company events
                    and HR programs.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                Requirements of the position:
              </h3>
              <div className={styles.redDivider}></div>
              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>Education:</h4>
                <ul className={styles.bulletList}>
                  <li>Bachelor's Degree (required)</li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>Work Experience:</h4>
                <ul className={styles.bulletList}>
                  <li>
                    Minimum of 1 year of experience in a similar role or in
                    performing related job responsibilities.
                  </li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>
                  Language Requirements:
                </h4>
                <ul className={styles.bulletList}>
                  <li>
                    Upper-intermediate level of English (spoken and written)
                  </li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>
                  Skills and Abilities:
                </h4>
                <ul className={styles.bulletList}>
                  <li>
                    Proficient in Microsoft Office (Word, Excel, Outlook, etc.)
                  </li>
                  <li>Excellent communication and interpersonal skills</li>
                  <li>Strong organizational and multitasking abilities</li>
                  <li>
                    Able to work well under pressure and handle emergency
                    situations
                  </li>
                  <li>Committed to delivering high-quality service</li>
                  <li>Honest, reliable, and demonstrates integrity</li>
                </ul>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Application Procedure</h3>
              <p className={styles.procedureText}>
                Fulfill the application form with all the required data. Human
                Resources Department will contact only candidates selected from
                the documentation screening.
              </p>

              <button
                className={styles.applyBtnBottom}
                onClick={() => navigate("/ApplicationForm")}
              >
                Apliko
                <img src={chevron} alt="chevron" className={styles.chevron} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
