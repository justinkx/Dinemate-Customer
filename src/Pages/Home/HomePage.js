import React, { useState, useEffect } from "react";
import BannerImage from "../../Images/dinemate-banner.png";
import "./HomePage.scss";
import Camera from "../../Images/camera.png";
import QrReader from "react-qr-reader";
import Close from "../../Images/close.png";
import { useHistory } from "react-router-dom";

function HomePage({}) {
  const history = useHistory();
  const [triggerScan, setScan] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      //   history.push("menu?restaurantId=1001&table=10");
    }, 100);
    return () => {
      setScan(false);
    };
  }, []);
  const handleScan = (result) => {
    if (result) {
      const restaurantId = getUrlParameter("restaurantId", result);
      const table = getUrlParameter("table", result);
      if (restaurantId && table) {
        setScan(false);
        history.push(`menu?restaurantId=${restaurantId}&table=${table}`);
      }
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="container center">
      <img className="banner-image" src={BannerImage} />
      <div className="button-container">
        {triggerScan && (
          <a onClick={() => setScan((prev) => !prev)} className="close-button">
            <img src={Close} />
          </a>
        )}
        <button
          onClick={() => setScan((prev) => !prev)}
          className="scan-button"
        >
          <img className="camera-icon" src={Camera} />
          Scan
        </button>
        <div className={`scanner-card ${triggerScan ? "" : "hide-scanner"}`}>
          <div className="scan-container">
            {triggerScan && <div className="scan"></div>}
            {triggerScan && (
              <QrReader
                delay={100}
                className="qrcode-reader"
                onError={handleError}
                onScan={handleScan}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export function getUrlParameter(name, url) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(url);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
export default HomePage;
