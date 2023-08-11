import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./container.css";
import { FcDownload } from "react-icons/fc";
const Container = ({ children }) => {
  const GenerateInvoice = () => {
    html2canvas(document.querySelector("#resume")).then((canvas) => {
      // let canvas = await fileToCanvas(file)
      // let mini = canvas.toDataURL("image/jpeg", 0.3);
      // doc.addImage({
      // imageData: mini,
      // format: "JPEG",
      // x: 0,
      // y: 0,
      // width: 200
      // height: 200,
      // alias: undefined,
      // compression: "FAST", //'NONE', 'FAST', 'MEDIUM' and 'SLOW'
      // rotation: 0,
      // });
      const imgData = canvas.toDataURL("image/png", 0.3);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [1200, 805],
        compress: true,
      });
      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      console.log("canvas imgData", imgData);
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, "FAST");
      const date = new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      pdf.save(`nikkil-${date}`);
    });
  };
  return (
    <>
      <div id="resume">{children}</div>
      <div className="download">
        <button onClick={() => GenerateInvoice()}>
          <FcDownload fontSize={29} className="download-icon" />
        </button>
      </div>
    </>
  );
};

export default Container;
