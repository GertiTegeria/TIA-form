import React, { useState, useRef } from "react";
import ArrowUp from "../../assets/arrowUp.png";
import UploadIcon from "../../assets/uploadPic.png";
import RecycleIcon from "../../assets/recycle.png";

const PhotoUpload = ({
  onFileSelect,
  acceptedTypes = "image/*",
  maxSize = 5 * 1024 * 1024,
  disabled = false,
}) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (files) => {
    const file = files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Ju lutem zgjidhni një fotografi të vlefshme.");
        return;
      }

      if (file.size > maxSize) {
        alert(
          `Madhësia e fotografisë duhet të jetë më e vogël se ${Math.round(
            maxSize / (1024 * 1024)
          )}MB.`
        );
        return;
      }

      setUploadedFile(file);
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
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  return (
    <div style={{ width: "100%", alignItems: "start" }}>
      {!uploadedFile ? (
        <div
          onClick={handleClick}
          style={{
            alignItems: "start",
          }}
        >
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
            // onMouseEnter={(e) => {
            //   if (!disabled) {
            //     e.target.style.backgroundColor = '#c2185b';
            //   }
            // }}
            // onMouseLeave={(e) => {
            //   if (!disabled) {
            //     e.target.style.backgroundColor = '#e91e63';
            //   }
            // }}
            disabled={disabled}
          >
            <img src={ArrowUp} alt="arrow-up" />
            Ngarko fotografinë tuaj
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
          <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
            <div>
              <img src={UploadIcon} alt="upload-icon" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: "0 0 4px 0",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                image.png
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >

              <button
                type="button"
                onClick={removeFile}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={RecycleIcon} alt="remove-icon" />
              </button>
            </div>
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

const PhotoUploadExample = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  return (
    <div>
      <PhotoUpload
        onFileSelect={handleFileSelect}
        acceptedTypes="image/*"
        maxSize={5 * 1024 * 1024}
      />
    </div>
  );
};

export default PhotoUploadExample;
