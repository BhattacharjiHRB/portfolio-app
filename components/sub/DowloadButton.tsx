// components/DownloadButton.tsx
import React from "react";

const DownloadButton: React.FC<{ filePath: string }> = ({ filePath }) => {
  const handleDownload = () => {
    // Function to trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = "your_file.pdf";
    downloadLink.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="py-2 button-primary text-center text-white cursor-pointer rounded-xl max-w-[200px] "
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
