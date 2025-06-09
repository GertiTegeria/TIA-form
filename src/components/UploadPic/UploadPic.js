import React, { useRef } from "react";
import ArrowUp from "../../assets/arrowUp.png";
import UploadIcon from "../../assets/uploadPic.png";
import RecycleIcon from "../../assets/recycle.png";
import PdfIcon from "../../assets/Cover.png";

const FileUpload = ({
  onFileSelect,
  acceptedTypes = "image/*",
  maxSize = 5 * 1024 * 1024,
  disabled = false,
  coverLetter = false,
  value = null,
}) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (files) => {
    const file = files[0];
    if (file) {
      const isPdf = file.type === "application/pdf";
      const isImage = file.type.startsWith("image/");

      if (!isPdf && !isImage) {
        alert("Ju lutem ngarkoni një imazh ose PDF.");
        return;
      }

      if (file.size > maxSize) {
        alert(`Skedari duhet të jetë më i vogël se ${Math.round(maxSize / (1024 * 1024))}MB.`);
        return;
      }

      if (onFileSelect) {
        onFileSelect(file);
      }
    }
  };

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleFileSelect(files);
  };

  const removeFile = () => {
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (onFileSelect) onFileSelect(null);
  };

  return (
    <div style={{ width: "100%", alignItems: "start" }}>
      {!value ? (
        <div onClick={handleClick}>
          <button
            type="button"
            style={{
              backgroundColor: "#DB0035",
              color: "#FFFFFF",
              border: "none",
              padding: "12px 24px",
              fontSize: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            disabled={disabled}
          >
            <img src={ArrowUp} alt="arrow-up" />
            {coverLetter ? "Ngarko si PDF" : "Ngarko fotografi"}
          </button>
        </div>
      ) : (
        <div
          style={{
            border: "none",
            padding: "16px",
            backgroundColor: "#F3F3F6",
            maxWidth: "250px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div>
              {value.type === "application/pdf" ? (
                <img src={PdfIcon} alt="pdf-icon" style={{ width: "14px", height: "14px" }} />
              ) : (
                <img src={UploadIcon} alt="upload-icon" />
              )}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {value.type === "application/pdf" ? "Coverletter.pdf" : "image.png"}
              </p>
            </div>
            <button
              type="button"
              onClick={removeFile}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                borderRadius: "50%",
              }}
            >
              <img src={RecycleIcon} alt="remove-icon" />
            </button>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes}
        onChange={handleFileInputChange}
        style={{ display: "none" }}
        disabled={disabled}
      />
    </div>
  );
};

export default FileUpload;
