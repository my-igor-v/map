import { React, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { VillagesPoints } from "./villagespoints";
import { villages } from "./villages";
import "./App.css";

export default function App() {
  const [currentId, setCurrentId] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>
        {"Карта 18. Зміна наголошеного [е] > [а]"}
      </h1>
      <div className="main">
        <div className="mapField">
          <VillagesPoints
            setShow={setShow}
            setCurrentId={setCurrentId}
            show={show}
            currentId={currentId}
          />
        </div>
        <div className="infoLegendField">
          <div className="legend">
            <div className="legend__small">
              <div className="legend__small__point">
                <span className="legendSpan yellow"></span>
              </div>
              <div className="legend__small__text">
                <p>
                  <b>[е]:</b> <i>ц[е́]рква, д[е]н', в[е́]чʼір</i>
                </p>
              </div>
            </div>
            <div className="legend__small">
              <div className="legend__small__point">
                <span className="legendSpan red"></span>
              </div>
              <div className="legend__small__text">
                <p> 
                  <b>[а]:</b> <i>ц[а́]рква, д[а]н', в[а́]чʼір</i>
                </p>
              </div>
            </div>
            <div className="legend__big">
              <div className="legend__big__point">
                <div> 
                  <span className="legendSpan greenRed bigger"></span> 
                </div>
                <div>
                  <span className="legendSpan greenYellow bigger"></span>
                </div>
              </div>
              <div className="legend__big__text">
                <p>  
                  <b>[a]</b> у ненаголошеній позиції: <i><br />пш[а]не́ц'я, соч[а]ви́ц'а</i>
                </p>
              </div>
            </div>
          </div>
          <div className="info">
            {show ? (
              <Information
                villages={villages}
                id={currentId}
                show={show}
                setShow={setShow}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="madeBy">
              <p><span>By:</span> Universal S., Druzhuk I.</p>
      </div>
    </div>
  );
}

function Information({ villages, id, setShow }) {
  let village = villages.filter((item) => item["id"] === id);
  village = village[0];
  return (
    <div className="information">
      <div className="infoClose" onClick={() => setShow(false)}>
        <span></span>
        <span></span>
      </div>
      <div className="infoTextBlock">
        {village.name}
        {village.transcription ? village.transcription : ""}
        {village.note ? village.note : ""}
        {village.plus ? village.plus : ""}
        <div className="audio">
          {village.audio ? (
            <ReactAudioPlayer src={village.audio} controls />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
