import CustomTextInput from "../../../components/Input/Text/TextInput";
import classes from "./WorkExperience.module.css";
import DateInputDemo from "../../../components/Input/Date/Date";
import locationIcon from "../../../assets/location.png";
import arrow from "../../../assets/dateArrow.png";
import CustomSelecter from "../../../components/Input/Autocomplete/Autocomplete";
import { businessTypeOptions } from "../../../DummyData/DUMMYDATA";

export default function WorkExperience({
  workExperience,
  updateWorkExperienceEntry,
  addWorkExperienceEntry,
  removeWorkExperienceEntry,
}) {
  return (
    <>
      <h3 className={classes.h3Title}>
        Ju lutemi filloni me eksperiencën tuaj më të fundit. Nëse nuk keni
        eksperienca të mëparshme pune vazhdoni në hapin e radhës.
      </h3>
      {workExperience.map((entry, index) => (
        <div key={entry.id}>
          {index > 0 && <div className={classes.divider}></div>}

          <div className={classes.personalForm}>
            <div className={classes.firstGroup}>
              <CustomTextInput
                name="Kompania"
                label="Shëno kompaninë"
                topLabel="Kompania"
                value={entry.company}
                onChange={(e) =>
                  updateWorkExperienceEntry(index, "company", e.target.value)
                }
              />
              <CustomTextInput
                name="location"
                label="Rruga, qyteti"
                topLabel="Vendndodhja"
                value={entry.location}
                icon={
                  <img
                    src={locationIcon}
                    alt="location"
                    className={classes.icon}
                  />
                }
                iconPosition="end"
                onChange={(e) =>
                  updateWorkExperienceEntry(index, "location", e.target.value)
                }
              />
            </div>
            <div className={classes.firstGroup}>
              <CustomSelecter
                width="100%"
                value={entry.businessType}
                options={businessTypeOptions}
                label="Zgjidh llojin e biznesit"
                name="select"
                topLabel="Lloji i biznesit"
                onChange={(value) =>
                  updateWorkExperienceEntry(index, "businessType", value)
                }
              />
              <CustomTextInput
                name="pozicioni"
                topLabel="Pozicioni"
                label="Shëno pozicionin e punës"
                value={entry.position}
                onChange={(e) =>
                  updateWorkExperienceEntry(index, "position", e.target.value)
                }
              />
            </div>

            <div className={classes.dateGroup}>
              <DateInputDemo
                topLabel="Periudha e fillimit"
                value={entry.startDate}
                onChange={(e) =>
                  updateWorkExperienceEntry(index, "startDate", e.target.value)
                }
              />
              <img alt="arrow" className={classes.dateArrow} src={arrow} />
              <DateInputDemo
                topLabel="Periudha e mbarimit"
                value={entry.endDate}
                onChange={(e) =>
                  updateWorkExperienceEntry(index, "endDate", e.target.value)
                }
              />
            </div>

            <CustomTextInput
              name={`pozicioni`}
              topLabel="Detyrat kryesore të pozicionit "
              label="Pershkruaj detyrat kryesore të pozicionit"
              multiline={true}
              rows={4}
              value={entry.positionDetails}
              onChange={(e) =>
                updateWorkExperienceEntry(
                  index,
                  "positionDetails",
                  e.target.value
                )
              }
            />

            {index === 0 && workExperience.length > 1 && (
              <button
                className={classes.deleteBtnBottom}
                onClick={() => removeWorkExperienceEntry(entry.id)}
              >
                Fshi
              </button>
            )}
          </div>
        </div>
      ))}

      {workExperience.length < 3 && (
        <button
          className={classes.applyBtnBottom}
          style={{ marginTop: "24px" }}
          onClick={addWorkExperienceEntry}
        >
          + Shto eksperiencë
        </button>
      )}
    </>
  );
}
