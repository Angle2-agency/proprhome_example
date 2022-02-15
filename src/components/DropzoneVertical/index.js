import React from "react";
import { useDropzone } from "react-dropzone";

import iconUpload from "../../assets/img/icon_upload.svg";
import iconPdf from "../../assets/img/icon_pdf.svg";
import iconDelete from "../../assets/img/icon_delete.svg";

import { Button } from "@material-ui/core";

const Dropzone = ({
  fileList,
  setFileList,
  deleteBurron,
  onFileUpload,
  accept,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept:
      accept ||
      "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    onDrop: (acceptedFiles) => {
      setFileList((prev) =>
        prev ? [...prev, ...acceptedFiles] : [...acceptedFiles]
      );
      if (onFileUpload) onFileUpload(acceptedFiles);
    },
    multiple: false,
  });

  const onDeleteFile = (file) => {
    const result = fileList.filter((f) => f.name !== file.name);
    setFileList(result);
  };

  return (
    <section className={"dropzone"}>
      <div {...getRootProps({ className: "dropzone-area" })}>
        <input {...getInputProps()} />
        <div className={"dropzone-area__inner"}>
          <img src={iconUpload} alt="" />
          <div className={"dropzone-title"}>Upload PO Document</div>
          <div className={"dropzone-text"}>
            <span>Choose a file</span> or drag and drop it here
          </div>
        </div>
      </div>
      {fileList && (
        <ul className={"dropzone-file-list"}>
          {fileList.map((file) => (
            <li key={file.path}>
              <img src={iconPdf} alt="" />
              <span>{file.path}</span>
              {deleteBurron && (
                <Button
                  size={"small"}
                  onClick={() => {
                    onDeleteFile(file);
                  }}
                >
                  <img src={iconDelete} alt="" />
                </Button>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Dropzone;
