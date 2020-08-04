import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import { JokeComponent } from "./jokeComponent";
import "./scss/styles.scss";

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="loader">
        <Loader type="Puff" color="#00BFFF" height="100" width="100" />
      </div>
    )
  );
};

ReactDOM.render(
  <div className="main-div">
    <div className="jumbotron">
      <h1>Laboratorio Módulo 3 - Bundling with Parcel</h1>
    </div>
    <LoadingIndicator />
    <JokeComponent />
  </div>,
  document.getElementById("app"),
);
