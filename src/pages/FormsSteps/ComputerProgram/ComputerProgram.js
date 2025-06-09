import React from "react";
import { computerPrograms as programsList } from "../../../DummyData/DUMMYDATA";
import classes from "./ComputerPrograms.module.css";

const ComputerProgram = ({ computerPrograms, setComputerPrograms }) => {
  const handleSkillChange = (program, level) => {
    setComputerPrograms({
      ...computerPrograms,
      [program]: level.target.value
    });
  };

  return (
    <>
      <h3 className={classes.h3Title}>
        Ky seksion është opsional. Ju mund ta plotësoni vetëm nëse dëshironi.
      </h3>

      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr className={classes.headerRow}>
              <th className={`${classes.headerCell} ${classes.firstHeaderCell}`}>Programi</th>
              <th className={classes.secondHeaderCell}>Fillestar</th>
              <th className={classes.secondHeaderCell}>Mesatar</th>
              <th className={classes.secondHeaderCell}>Avancuar</th>
            </tr>
          </thead>
          <tbody>
            {programsList.map((program) => (
              <tr key={program} className={classes.row}>
                <td className={classes.programNameCell}>{program}</td>
                {["fillestar", "mesatar", "avancuar"].map((level) => (
                  <td key={level} className={classes.cell}>
                    <div className={classes.radioCell}>
                      <input
                        type="radio"
                        name={`skill-${program}`}
                        value={level}
                        checked={computerPrograms[program] === level}
                        onChange={(e) => handleSkillChange(program, e)}
                        className={classes.radioInput}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComputerProgram;
