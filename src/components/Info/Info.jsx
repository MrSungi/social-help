import React from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

const Info = () => {
  const location = useLocation();
  const data = location.state.help;

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("PPA.docx").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "PPA.docx";
        alink.click();
      });
    });
  };

  const onButtonClick2 = () => {
    // using Java Script method to get PDF file
    fetch("TPS.docx").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "TPS.docx";
        alink.click();
      });
    });
  };

  return (
    <div className="Layout">
      <ul style={{ listStyle: "none" }}>
        {data.map((item, key) => (
          <li className="card">
            {item.url === "DOCX" ? (
              <div key={item.id} onClick={onButtonClick}>
                {item.info}
              </div>
            ) : item.url === "TPS" ? (
              <div key={item.id} onClick={onButtonClick2}>
                {item.info}
              </div>
            ) : (
              <a key={item.id} href={item.url}>
                {item.info}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Info;
