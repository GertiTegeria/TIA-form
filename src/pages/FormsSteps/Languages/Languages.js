import CustomTextInput from "../../../components/Input/Text/TextInput";
import classes from "./Language.module.css";
import CustomSelecter from "../../../components/Input/Autocomplete/Autocomplete";
import { languageLevels } from "../../../DummyData/DUMMYDATA";

export default function Language({
  languages,
  updateLanguageEntry,
  addLanguageEntry,
  removeLanguageEntry,
}) {
  return (
    <>
      <h3 className={classes.h3Title}>
        Ky seksion është opsional. Ju mund ta plotësoni vetëm nëse dëshironi.
      </h3>
      {languages.map((entry, index) => (
        <div key={entry.id}>
          {index > 0 && <div className={classes.divider}></div>}

          <div className={classes.personalForm}>
            <div className={classes.firstGroup}>
              <CustomTextInput
                value={entry.language}
                label="Shëno gjuhën"
                name="Gjuha"
                topLabel="Gjuha"
                onChange={(e) => updateLanguageEntry(index, "language", e.target.value)}
              />

              <CustomSelecter
                width="100%"
                value={entry.level}
                options={languageLevels}
                label="Zgjidh Nivelin"
                name="select"
                topLabel="Niveli"
                onChange={(value) => updateLanguageEntry(index, "level", value)}
              />
            </div>

            {index === 0 && languages.length > 1 && (
              <button
                className={classes.deleteBtnBottom}
                onClick={() => removeLanguageEntry(entry.id)}
              >
                Fshi
              </button>
            )}
          </div>
        </div>
      ))}

      {languages.length < 3 && (
        <button
          className={classes.applyBtnBottom}
          style={{ marginTop: "24px" }}
          onClick={addLanguageEntry}
        >
          + Shto gjuhe
        </button>
      )}
    </>
  );
}
