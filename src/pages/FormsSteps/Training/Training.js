import CustomTextInput from "../../../components/Input/Text/TextInput";
import classes from "./Training.module.css";
import DateInputDemo from "../../../components/Input/Date/Date";
import locationIcon from "../../../assets/location.png";

export default function Training({
  training,
  updateTrainingEntry,
  addTrainingEntry,
  removeTrainingEntry,
}) {
  return (
    <>
      <h3 className={classes.h3Title}>
        Ky seksion është opsional. Ju mund ta plotësoni vetëm nëse dëshironi.
      </h3>
      {training.map((entry, index) => (
        <div key={entry.id}>
          {index > 0 && <div className={classes.divider}></div>}

          <div className={classes.personalForm}>
            <CustomTextInput
              name="Titulli i trajnimit"
              label="Titulli"
              topLabel="Titulli i trajnimit"
              value={entry.title}
              onChange={(e) =>
                updateTrainingEntry(index, "title", e.target.value)
              }
            />

            <div className={classes.firstGroup}>
              <CustomTextInput
                value={entry.instituti}
                label="Zgjidh instiucionin e trajnimit"
                name="instituti"
                topLabel="instituti"
                onChange={(e) =>
                  updateTrainingEntry(index, "instituti", e.target.value)
                }
              />
              <CustomTextInput
                name="vendodhja"
                topLabel="Vendndodhja e institutit"
                label="Rruga, qyteti"
                value={entry.vendodhja}
                onChange={(e) =>
                  updateTrainingEntry(index, "vendodhja", e.target.value)
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

            <div className={classes.firstGroup}>
              <DateInputDemo
                topLabel="Viti"
                value={entry.year}
                yearOnly={true}
                onChange={(e) =>
                  updateTrainingEntry(index, "year", e.target.value)
                }
              />
              <CustomTextInput
                value={entry.duration}
                label="Kohëzgjatja"
                name="duration"
                topLabel="Kohëzgjatja"
                onChange={(e) =>
                  updateTrainingEntry(index, "duration", e.target.value)
                }
              />
            </div>

            {training.length > 1 && (
              <button
                className={classes.deleteBtnBottom}
                onClick={() => removeTrainingEntry(entry.id)}
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
          onClick={addTrainingEntry}
        >
          + Shto trajnim
        </button>
    </>
  );
}
