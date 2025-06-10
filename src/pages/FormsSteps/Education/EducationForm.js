import CustomTextInput from "../../../components/Input/Text/TextInput";
import classes from "./Education.module.css";
import DateInputDemo from "../../../components/Input/Date/Date";
import locationIcon from "../../../assets/location.png";
import arrow from "../../../assets/dateArrow.png";

export default function EducationForm({ education, updateEducationEntry, addEducationEntry, removeEducationEntry }) {
  return (
    <>
      <h3 className={classes.h3Title}>
        Ky seksion është opsional. Ju mund ta plotësoni vetëm nëse dëshironi.
      </h3>

      {education.map((entry, index) => (
        <div key={index}>
          {index > 0 && <div className={classes.divider}></div>}
          <div className={classes.personalForm}>
            <div className={classes.firstGroup}>
              <CustomTextInput
                topLabel="Instituti"
                label="Zgjidh instiucionin e arsimimit"
                value={entry.institution}
                onChange={(e) =>
                  updateEducationEntry(index, "institution", e.target.value)
                }
              />
              <CustomTextInput
                topLabel="Vendndodhja e institutit"
                label="Rruga, qyteti"
                value={entry.location}
                onChange={(e) =>
                  updateEducationEntry(index, "location", e.target.value)
                }
                icon={
                  <img
                    src={locationIcon}
                    alt="location"
                    className={classes.icon}
                  />
                }
                iconPosition="end"
              />
            </div>
            <CustomTextInput
              topLabel="Diploma"
              label="Shkruaj titullin e diplomës"
              value={entry.diploma}
              onChange={(e) =>
                updateEducationEntry(index, "diploma", e.target.value)
              }
            />
            <div className={classes.dateGroup}>
              <DateInputDemo
                topLabel="Periudha e fillimit"
                value={entry.startDate}
                onChange={(e) =>
                  updateEducationEntry(index, "startDate", e.target.value)
                }
              />
              <img alt="arrow" className={classes.dateArrow} src={arrow} />
              <DateInputDemo
                topLabel="Periudha e mbarimit"
                value={entry.endDate}
                onChange={(e) =>
                  updateEducationEntry(index, "endDate", e.target.value)
                }
              />
            </div>

            {education.length > 1 && (
              <button
                className={classes.applyBtnBottom}
                onClick={() => removeEducationEntry(entry.id)}
              >
                Fshi
              </button>
            )}
          </div>
        </div>
      ))}
        <button
          className={classes.applyBtnBottom}
          style={{ marginTop: "24px" }}
          onClick={addEducationEntry}
        >
          + Shto arsimin
        </button>
    </>
  );
}

