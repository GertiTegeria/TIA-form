import { useRef } from "react";
import ArrowUp from "../../assets/arrowUp.png";
import UploadIcon from "../../assets/uploadPic.png";
import RecycleIcon from "../../assets/recycle.png";

const PhotoUpload = ({
  onFileSelect,
  acceptedTypes,
  maxSize,
  disabled = false,
  value,
}) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (files) => {
    const file = files[0];
    if (file) {
      const allowedTypes = acceptedTypes.split(",").map((t) => t.trim());
      const isAllowed = allowedTypes.some((type) => {
        if (type === "image/*") {
          return file.type.startsWith("image/");
        }
        return file.type === type;
      });

      if (!isAllowed) {
        alert("Ju lutem zgjidhni një imazh ose PDF të vlefshëm.");
        return;
      }

      if (file.size > maxSize) {
        alert(
          `Madhësia e skedarit duhet të jetë më e vogël se ${Math.round(
            maxSize / (1024 * 1024)
          )}MB.`
        );
        return;
      }

      onFileSelect?.(file);
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
    fileInputRef.current.value = "";
    onFileSelect?.(null);
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
              fontFamily: "Open Sans",
              gap: "8px",
            }}
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
          <div >
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
                {value?.name || "Emri i skedarit"}
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

export default PhotoUpload;
