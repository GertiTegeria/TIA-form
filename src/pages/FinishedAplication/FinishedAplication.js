import PersonPhoto from "../../assets/photo.jpeg";
import classes from "./Finished.module.css";
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import ButtonStepper from "../../components/ButtonStepper/ButtonStepper";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: '#DB0035',
  '&.Mui-checked': {
    color: '#DB0035',
  },
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo',  } };

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },
  fieldGroup: {
    display: "flex",
    gap: "15px",
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "28px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  highlight: {
    color: "#DB0031",
    fontWeight: "bold",
  },
  tiaLogo: {
    textAlign: "right",
  },
  tiaText: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#e91e63",
    display: "block",
    lineHeight: "0.8",
  },
  tiaSubtext: {
    fontSize: "6px",
    color: "#666",
    lineHeight: "1",
  },

  sectionTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#DB0035",
  },

  fieldGroupLabel: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginRight: "20px",
  },

  fieldGroupValue: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  label: {
    fontWeight: "600",
    minWidth: "65px",
    color: "#1E1E1E",
    fontSize: "14px",
  },
  value: {
    color: "#1E1E1E",
    fontSize: "14px",
    fontWeight: "400",
  },
  fullWidth: {
    gridColumn: "1 / -1",
  },
  textArea: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#1E1E1E",
  },
  checkboxSection: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  checkboxInput: {
    width: "10px",
    height: "10px",
    backgroundColor: "#fff",
  },
  termsText: {
    fontSize: "8px",
    lineHeight: "1.2",
    color: "#333",
    textAlign: "justify",
  },
  submitSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#e91e63",
    color: "white",
    border: "none",
    padding: "8px 25px",
    fontSize: "10px",
    fontWeight: "bold",
    borderRadius: "3px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  backButton: {
    backgroundColor: "transparent",
    border: "1px solid #ccc",
    padding: "6px 15px",
    fontSize: "9px",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

const FinishedAplication = ({ onBack, onSubmit }) => {
  const handleSubmit = () => {
    // Add your form submission logic here
    console.log("Form submitted!");
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <div >
      <div className={classes.divider}></div>
      <div style={styles.content}>
        {/* Personal Information */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Përmbledhje</h2>
          <img
            src={PersonPhoto}
            alt="Person"
            className={classes.photoPlaceholder}
          />
          <div className={classes.row}>
            <div className={classes.row}>
              <div style={styles.fieldGroupLabel}>
                <span style={styles.label}>Emri dhe Mbiemri:</span>

                <span style={styles.label}>Datëlindja:</span>
                <span style={styles.label}>Vendlindja:</span>
                <span style={styles.label}>Gjinia:</span>
              </div>
              <div style={styles.fieldGroupValue}>
                <span style={styles.value}>John Doe</span>

                <span style={styles.value}>09/12/89</span>

                <span style={styles.value}>Tirana</span>

                <span style={styles.value}>Mashkull</span>
              </div>
            </div>
            <div className={classes.row}>
              <div style={styles.fieldGroupLabel}>
                <span style={styles.label}>Statusi Civil:</span>

                <span style={styles.label}>Adresa:</span>

                <span style={styles.label}>Telefon / Celular:</span>

                <span style={styles.label}>E-mail:</span>
              </div>
              <div style={styles.fieldGroupValue}>
                <span style={styles.value}>I martuar</span>

                <span style={styles.value}>Bulevardi Zogu I, Tirane</span>

                <span style={styles.value}>+355 123 456 7891</span>

                <span style={styles.value}>john.doe@email.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Information for Contact */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Interesi për punë </h2>
          <div style={styles.column}>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>Pozicioni për të cilin aplikoj:</span>
              <span style={styles.value}>Receptionist</span>
            </div>

            <div style={styles.fieldGroup}>
              <span style={styles.label}>Mundësia për të punuar:</span>
              <span style={styles.value}>Mundësia për të punuar:</span>
            </div>
          </div>
        </section>

        {/* Access */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Arsimi</h2>
          <div className={classes.row}>
            <div className={classes.row}>
              <div style={styles.fieldGroupLabel}>
                <span style={styles.label}>Instituti:</span>

                <span style={styles.label}>Diploma:</span>
              </div>
              <div style={styles.fieldGroupValue}>
                <span style={styles.value}>
                  FSHN- Fakulteti i Shkencave te Natyres
                </span>

                <span style={styles.value}>
                  Bachelor në Shkenca Kompjuterike
                </span>
              </div>
            </div>
            <div className={classes.row}>
              <div style={styles.fieldGroupLabel}>
                <span style={styles.label}>Vendndodhja e institutit:</span>

                <span style={styles.label}>Periudha:</span>
              </div>
              <div style={styles.fieldGroupValue}>
                <span style={styles.value}>Bulevardi Zogu I, Tirane</span>

                <span style={styles.value}>11/11/2020 - 14/06/2023</span>
              </div>
            </div>
          </div>
        </section>

        <div className={classes.divider}></div>

        <div className={classes.row}>
          <div className={classes.row}>
            <div style={styles.fieldGroupLabel}>
              <span style={styles.label}>Instituti:</span>

              <span style={styles.label}>Diploma:</span>
            </div>
            <div style={styles.fieldGroupValue}>
              <span style={styles.value}>
                FSHN- Fakulteti i Shkencave te Natyres
              </span>

              <span style={styles.value}>Bachelor në Shkenca Kompjuterike</span>
            </div>
          </div>
          <div className={classes.row}>
            <div style={styles.fieldGroupLabel}>
              <span style={styles.label}>Vendndodhja e institutit:</span>

              <span style={styles.label}>Periudha:</span>
            </div>
            <div style={styles.fieldGroupValue}>
              <span style={styles.value}>Bulevardi Zogu I, Tirane</span>

              <span style={styles.value}>11/11/2020 - 14/06/2023</span>
            </div>
          </div>
        </div>

        {/* Previous Experience */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Eksperienca pune</h2>
          <div className={classes.row}>
            <div className={classes.row}>
              <div style={styles.fieldGroupLabel}>
                <span style={styles.label}>Kompania:</span>
                <span style={styles.label}>Vendndodhja:</span>
                <span style={styles.label}>Periudha:</span>
              </div>
              <div style={styles.fieldGroupValue}>
                <span style={styles.value}>Tegeria</span>
                <span style={styles.value}>Bulevardi Zogu I, Tirane</span>
                <span style={styles.value}>11/11/2020 - 14/06/2023</span>
              </div>
            </div>
            <div className={classes.row}>
              <div style={styles.fieldGroupLabel}>
                <span style={styles.label}>Lloji i biznesit:</span>

                <span style={styles.label}>Periudha:</span>
              </div>
              <div style={styles.fieldGroupValue}>
                <span style={styles.value}>Shpk</span>

                <span style={styles.value}>11/11/2020 - 14/06/2023</span>
              </div>
            </div>
          </div>
          <div style={styles.column}>
            <div style={{ marginBottom: "12px" }}></div>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>Detyrat kryesore të pozicionit:</span>
            </div>
            <div style={styles.textArea}>
              Krijimi i wireframes, prototipeve dhe rrjedhave të përdoruesit për
              aplikacione web dhe mobile. Bashkëpunim i ngushtë me zhvilluesit
              dhe palët e interesuara për të siguruar një zbatim të saktë të
              dizajnit. Realizimi i dizajneve vizuale në përputhje me
              identitetin vizual të kompanisë. Testimi i përvojës së përdoruesit
              dhe analizimi i sjelljes për të identifikuar mundësi për
              përmirësim. Përdorimi i mjeteve si Figma ose Adobe XD për
              zhvillimin dhe prezantimin e koncepteve. Sigurimi që ndërfaqet
              funksionojnë mirë në të gjitha pajisjet (responsive design).
              Pjesëmarrje në mbledhje dhe workshop-e për mbledhjen e kërkesave
              dhe përcaktimin e objektivave të dizajnit.
            </div>
          </div>
        </section>

        {/* Professional Goals */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Trajnime profesionale</h2>
          <div style={styles.fieldGroup}>
            <span style={styles.label}>Titulli i Trajnimit:</span>
            <span style={styles.value}>
              Bazat e Dizajnit të Përvojës së Përdoruesit (UX) dhe Ndërfaqes
              Vizuale (UI)
            </span>
          </div>
          <div style={{ marginBottom: "12px" }}></div>

          <div className={classes.row}>
            <div style={styles.column}>
              <div style={styles.fieldGroup}>
                <span style={styles.label}>Instituti:</span>
                <span style={styles.value}>Taleas</span>
              </div>
              <div style={styles.fieldGroup}>
                <span style={styles.label}>Vendndodhja e institutit:</span>
                <span style={styles.value}>Bulevardi Zogu I, Tirane</span>
              </div>
            </div>
            <div style={styles.column}>
              <div style={styles.fieldGroup}>
                <span style={styles.label}>Viti:</span>
                <span style={styles.value}>2024</span>
              </div>
              <div style={styles.fieldGroup}>
                <span style={styles.label}>Kohëzgjatja:</span>
                <span style={styles.value}>5 muaj</span>
              </div>
            </div>
          </div>
        </section>

        {/* Formimi Akademik */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Programe kompjuterike </h2>
          <div style={styles.column}>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>Microsoft Word:</span>
              <span style={styles.value}>Niveli avancuar</span>
            </div>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>Microsoft Excel:</span>
              <span style={styles.value}>Niveli avancuar</span>
            </div>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>Microsoft Access:</span>
              <span style={styles.value}>Niveli avancuar</span>
            </div>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>Power Point:</span>
              <span style={styles.value}>Nivel i avancuar</span>
            </div>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>Te tjera:</span>
              <span style={styles.value}>Nivel i avancuar</span>
            </div>
          </div>
        </section>

        {/* Pajisje dhe Rrjete */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Gjuhët e huaja</h2>
          <div style={styles.column}>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>Gjuha:</span>
              <span style={styles.value}>Shqip</span>
            </div>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>Niveli:</span>
              <span style={styles.value}>Avancuar</span>
            </div>
          </div>
        </section>

        {/* Terms Letter */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Cover Letter</h2>

          <div style={styles.textArea}>
            I nderuar staf i rekrutimit, Me anë të kësaj letre dëshiroj të
            shpreh interesin tim për pozicionin Recepsionist pranë Tirana
            International Airport. Jam një person i organizuar, komunikues dhe
            mikpritës, me aftësi të mira në menaxhimin e informacionit dhe
            shërbimit ndaj klientit. Kam përvojë në mjedise pune dinamike, ku
            kontakti i parë me vizitorët ka qenë thelbësor për imazhin e
            kompanisë. Zotëroj njohuri të mira të gjuhës angleze dhe përdorimit
            të paketës Microsoft Office, si dhe kam një qëndrim profesional e të
            përkushtuar ndaj detyrave të përditshme. TIA është një nga pikat më
            të rëndësishme të hyrjes në vend dhe do të ishte kënaqësi për mua të
            kontribuoj në përfaqësimin dinjitoz dhe të ngrohtë të këtij
            institucioni. Ju falënderoj për vëmendjen dhe mbetem në pritje të
            një përgjigjeje pozitive. Me respekt, John Doe
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Pyetje shtese</h2>
          <div style={styles.column}>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>
                Keni të afërm që punojnë për Tirana International Airport?
              </span>
              <span style={styles.value}>Jo</span>
            </div>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>
                Nese po, specifikoni marrëdhënien:
              </span>
              <span style={styles.value}>-</span>
            </div>
            <div style={styles.fieldGroup}>
              <span style={styles.label}>
                Si e morët informacionin për pozicionin vakant?
              </span>
              <span style={styles.value}>Nga lajmërimi në shtyp</span>
            </div>
          </div>
          <div style={{ marginBottom: 48 }}></div>
          <CustomCheckbox  {...label} defaultChecked />
          <span style={{ fontSize: "12px", fontWeight: "400",color: "#1E1E1E" }}>
            Unë deklaroj se të gjitha të dhënat janë të vërteta dhe të plota dhe
            jam dakord që çdo falsifikim i informacionit, pavarësisht periudhës
            së zbulimit, mund të shkaktojë përfundim të marrëdhënies time të
            punësimit me kompaninë. Unë kuptoj që i gjithë informacioni në këtë
            aplikim është subjekt verifikimi.
          </span>
        </section>
        <div style={{ marginBottom: 15 }}></div>
      <div className={classes.divider}></div>
        {/* Submit Section */}
      <ButtonStepper
          activeStep={8}
          stepsLength={9}
          onNext={handleSubmit}
          onBack={onBack}
          isLastStep={true}
        />
      </div>
    </div>
  );
};

export default FinishedAplication;
