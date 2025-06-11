import PersonPhoto from "../../assets/photo.jpeg";
import classes from "./Finished.module.css";
import { styled } from "@mui/material/styles";
import ButtonStepper from "../../components/ButtonStepper/ButtonStepper";
import Checkbox from "@mui/material/Checkbox";
import phoneIcon from "../../assets/phone.png";
import emailIcon from "../../assets/email.svg";
import locationIcon from "../../assets/location.png";
import { Fragment } from "react";

const CustomCheckbox = styled(Checkbox)(() => ({
  padding: "0px",
  "&.Mui-checked": {
    color: "#DB0035",
    padding: "0px",
  },
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FinishedAplication = ({
  onBack,
  onSubmit,
  formData,
  computerPrograms,
}) => {
  const handleSubmit = () => {
    // Add your form submission logic here
    console.log("Form submitted!");
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.firstDivider}></div>
      <h2 className={classes.sectionTitle}>Përmbledhje</h2>
      {/* Personal Data */}
      <section className={classes.header}>
        {formData?.photoFile ? (
          <img
            src={URL.createObjectURL(formData.photoFile)}
            alt="Uploaded"
            className={classes.photoPlaceholder}
          />
        ) : (
          <img
            src={PersonPhoto}
            alt="Placeholder"
            className={classes.photoPlaceholder}
          />
        )}
        <div className={classes.personalContainer}>
          <div className={classes.title}>John Doe</div>
          <div className={classes.data}>
            <div className={classes.dataElement}>
              <div className={classes.bold}>Datelindja:</div>
              <div className={classes.secondData}>
                {" "}
                {formData.datePersonal ? formData?.datePersonal : "-"}
              </div>
            </div>
            <div className={classes.dataElement}>
              <div className={classes.bold}>Vendlindja:</div>
              <div className={classes.secondData}>
                {" "}
                {formData.vendlindjaPersonal
                  ? formData?.vendlindjaPersonal
                  : "-"}
              </div>
            </div>
            <div className={classes.dataElement}>
              <div className={classes.bold}>Gjinia:</div>
              <div className={classes.secondData}>
                {" "}
                {formData.gjinia ? formData?.gjinia : "-"}
              </div>
            </div>
            <div className={classes.dataElement}>
              <div className={classes.bold}>Statusi:</div>
              <div className={classes.secondData}>
                {" "}
                {formData.statusiCivil ? formData?.statusiCivil : "-"}
              </div>
            </div>
          </div>
          <div className={classes.contactInfo}>
            <div className={classes.dataElement}>
              <div>
                <img
                  src={locationIcon}
                  alt="location"
                  className={classes.icon}
                />
              </div>
              <div className={classes.secondData}>
                {" "}
                {formData.adresaPersonal ? formData?.adresaPersonal : "-"}
              </div>
            </div>
            <div className={classes.dataElement}>
              <div>
                <img src={phoneIcon} alt="phone" className={classes.icon} />
              </div>
              <div className={classes.secondData}>
                {" "}
                {formData.telefon ? formData?.telefon : "-"}
              </div>
            </div>
            <div className={classes.dataElement}>
              <div>
                <img src={emailIcon} alt="email" className={classes.icon} />
              </div>
              <div className={classes.secondData}>
                {" "}
                {formData.email ? formData?.email : "-"}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Apply Data */}
      <div className={classes.headerEducation}>
        <div className={classes.stepsTitle}>Interesi për punë</div>
        <div className={classes.personalContainer}>
          <div
            style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
          >
            <div className={classes.dataTitle}>
              Pozicioni për të cilin aplikoj:
            </div>
            <div className={classes.secondData}>
              {" "}
              {formData.interesiPërPunë ? formData?.interesiPërPunë : "-"}
            </div>
          </div>
          <div
            style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
          >
            <div className={classes.dataTitle}>Mundësia për të punuar:</div>
            <div className={classes.secondData}>
              {" "}
              {formData.mundësiaPunë ? formData?.mundësiaPunë : "-"}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divider}></div>

      {/* Education */}
      <div className={classes.headerEducation}>
        <div className={classes.stepsTitle}>Arsimi</div>
        <div className={classes.personalContainer}>
          {formData?.education && formData.education.length > 0 ? (
            formData.education.every(
              (edu) =>
                !edu.diploma &&
                !edu.institution &&
                !edu.startDate &&
                !edu.endDate &&
                !edu.location
            ) ? (
              <div className={classes.education}>-</div>
            ) : (
              formData.education.map((edu, index) => (
                <Fragment key={index}>
                  <div className={classes.educationContainer}>
                    {edu.diploma && (
                      <div className={classes.dataTitle}>{edu.diploma}</div>
                    )}
                    {edu.institution && (
                      <Fragment>
                        <span className={classes.dotSeparator}>•</span>
                        <div className={classes.education}>
                          {edu.institution}
                        </div>
                      </Fragment>
                    )}
                  </div>
                  <div className={classes.educationContainer}>
                    {edu.startDate && edu.endDate && (
                      <div className={classes.education}>
                        {edu.startDate} - {edu.endDate}
                      </div>
                    )}
                    {edu.location && (
                      <Fragment>
                        <span className={classes.dotSeparator}>•</span>
                        <div className={classes.education}>{edu.location}</div>
                      </Fragment>
                    )}
                  </div>
                </Fragment>
              ))
            )
          ) : (
            <div className={classes.education}>-</div>
          )}
        </div>
      </div>

      <div className={classes.divider}></div>
      {/* Eksperienca pune  */}
      <div className={classes.headerEducation}>
        <div className={classes.stepsTitle}>Eksperienca pune</div>
        <div className={classes.personalContainer}>
          {formData?.workExperience && formData.workExperience.length > 0 ? (
            formData.workExperience.every(
              (exp) =>
                !exp.position &&
                !exp.company &&
                !exp.startDate &&
                !exp.endDate &&
                !exp.location &&
                !exp.positionDetails
            ) ? (
              <div className={classes.education}>-</div>
            ) : (
              formData.workExperience.map((exp, index) => (
                <Fragment key={index}>
                  <div className={classes.educationContainer}>
                    {exp.position && (
                      <div className={classes.dataTitle}>{exp.position}</div>
                    )}
                    {exp.company && (
                      <Fragment>
                        <span className={classes.dotSeparator}>•</span>
                        <div className={classes.education}>{exp.company}</div>
                      </Fragment>
                    )}
                  </div>
                  <div className={classes.educationContainer}>
                    {exp.startDate && exp.endDate && (
                      <div className={classes.education}>
                        {exp.startDate} - {exp.endDate}
                      </div>
                    )}
                    {exp.location && (
                      <Fragment>
                        <span className={classes.dotSeparator}>•</span>
                        <div className={classes.education}>{exp.location}</div>
                      </Fragment>
                    )}
                  </div>
                  {exp.positionDetails && (
                    <div className={classes.workDetails}>
                      {exp.positionDetails}
                    </div>
                  )}
                </Fragment>
              ))
            )
          ) : (
            <div className={classes.education}>-</div>
          )}
        </div>
      </div>

      <div className={classes.divider}></div>
      {/* Trajnime profesionale  */}
      <div className={classes.headerEducation}>
        <div className={classes.stepsTitle}>Trajnime profesionale</div>
        <div className={classes.personalContainer}>
          {formData?.training && formData.training.length > 0 ? (
            formData.training.every(
              (train) =>
                !train.title &&
                !train.instituti &&
                !train.year &&
                !train.duration &&
                !train.vendodhja
            ) ? (
              <div className={classes.education}>-</div>
            ) : (
              formData.training.map((train, index) => (
                <Fragment key={index}>
                  <div className={classes.educationContainer}>
                    {train.title && (
                      <div className={classes.dataTitle}>{train.title}</div>
                    )}
                    {train.instituti && (
                      <Fragment>
                        <span className={classes.dotSeparator}>•</span>
                        <div className={classes.education}>
                          {train.instituti}
                        </div>
                      </Fragment>
                    )}
                  </div>
                  <div className={classes.educationContainer}>
                    {train.year && (
                      <div className={classes.education}>{train.year}</div>
                    )}
                    {train.duration && (
                      <Fragment>
                        <span className={classes.dotSeparator}>•</span>
                        <div className={classes.education}>
                          Kohëzgjatja: {train.duration}
                        </div>
                      </Fragment>
                    )}
                    {train.vendodhja && (
                      <Fragment>
                        <span className={classes.dotSeparator}>•</span>
                        <div className={classes.education}>
                          {train.vendodhja}
                        </div>
                      </Fragment>
                    )}
                  </div>
                </Fragment>
              ))
            )
          ) : (
            <div className={classes.education}>-</div>
          )}
        </div>
      </div>

      <div className={classes.divider}></div>
      {/* Computer programs  */}
      <div className={classes.headerEducation}>
        <div className={classes.stepsTitle}>Programe kompjuterike</div>
        <div className={classes.computerPrograms}>
          {computerPrograms && Object.entries(computerPrograms).length > 0 ? (
            Object.entries(computerPrograms).map(([program, level], index) => (
              <Fragment key={index}>
                <div className={classes.educationContainer}>
                  <div className={classes.dataTitle}>{program}:</div>
                  <div className={classes.education}>{level}</div>
                </div>
              </Fragment>
            ))
          ) : (
            <div className={classes.education}>-</div>
          )}
        </div>
      </div>
      <div className={classes.divider}></div>
      {/* Gjuhet  */}
      <div className={classes.headerEducation}>
        <div className={classes.stepsTitle}>Gjuhët e huaja</div>
        <div className={classes.personalContainer}>
          {formData?.foreignLanguages &&
          formData.foreignLanguages.length > 0 ? (
            formData.foreignLanguages.every((lang) => !lang.language) ? (
              <div className={classes.education}>-</div>
            ) : (
              formData.foreignLanguages.map((lang, index) => (
                <Fragment key={index}>
                  <div className={classes.educationContainer}>
                    {lang.language && (
                      <div className={classes.dataTitle}>{lang.language}:</div>
                    )}
                    {lang.level && (
                      <div className={classes.education}>{lang.level}</div>
                    )}
                  </div>
                </Fragment>
              ))
            )
          ) : (
            <div className={classes.education}>-</div>
          )}
        </div>
      </div>

      <div className={classes.divider}></div>
      {/* Cover letter  */}
      <div className={classes.headerEducation}>
        <div className={classes.stepsTitle}>Cover letter</div>
        <div className={classes.personalContainer}>
          {formData?.coverLetterLength ? (
            <Fragment>
              {formData.coverLetterLength && (
                <div
                  className={classes.coverLetterText}
                  style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}
                >
                  {formData.coverLetterLength}
                </div>
              )}
            </Fragment>
          ) : (
            <div className={classes.education}>-</div>
          )}
        </div>
      </div>
      <div className={classes.divider}></div>

      {/* Extra questions */}
      <div className={classes.headerEducation}>
        <div className={classes.stepsTitle}>Pyetjet e shtesë</div>
        <div className={classes.personalContainer}>
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div className={classes.dataTitleExtra}>
              Keni të afërm që punojnë për Tirana International Airport?
            </div>
            <div className={classes.dataTitleExtraExtra}>
              {formData.additionalQuestions}
            </div>
          </div>

          {formData.additionalQuestions === "Po" &&
            formData.specifyRelationship && (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <div className={classes.dataTitleExtra}>
                  Specifikoni marrëdhënien:
                </div>
                <div className={classes.dataTitleExtraExtra}>
                  {formData.specifyRelationship}
                </div>
              </div>
            )}

          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div className={classes.dataTitleExtra}>
              Si e morët informacionin për pozicionin vakant?
            </div>
            <div className={classes.dataTitleExtraExtra}>
              {formData.additionalQuestions2}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divider}></div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "flex-start",
        }}
      >
        <CustomCheckbox {...label} />
        <div
          style={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#1E1E1E",
            lineHeight: "20px",
          }}
        >
          Unë deklaroj se të gjitha të dhënat janë të vërteta dhe të plota dhe
          jam dakord që çdo falsifikim i informacionit, pavarësisht periudhës së
          zbulimit, mund të shkaktojë përfundim të marrëdhënies time të
          punësimit me kompaninë. Unë kuptoj që i gjithë informacioni në këtë
          aplikim është subjekt verifikimi.
        </div>
      </div>
      <div className={classes.divider}></div>
      <ButtonStepper
        activeStep={8}
        stepsLength={9}
        onNext={handleSubmit}
        onBack={onBack}
        isLastStep={true}
      />
    </div>
  );
};

export default FinishedAplication;
