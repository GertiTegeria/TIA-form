import CoverLetterTextarea from "../../../components/Input/TextArea/TextArea";
import FileUpload from "../../../components/UploadPic/UploadPic";

export default function CoverLetter({
  formData,
  updateFormData,
  updloadCoverLetterasFile,
}) {
  return (
    <div>
      {formData.coverLetterFile ? (
        ""
      ) : (
        <CoverLetterTextarea
          name="coverLetter"
          value={formData.coverLetterLength}
          onChange={(e) => updateFormData("coverLetterLength", e.target.value)}
          placeholder="Shkruaj cover letter"
          rows={10}
          maxLength={2000}
        />
      )}
      <FileUpload
        onFileSelect={(file) => {
          updateFormData("coverLetterFile", file);
          if (file) {
            updloadCoverLetterasFile(file);
          }
        }}
        acceptedTypes="application/pdf"
        maxSize={5 * 1024 * 1024}
        coverLetter={true}
        value={formData.coverLetterFile}
      />
    </div>
  );
}
