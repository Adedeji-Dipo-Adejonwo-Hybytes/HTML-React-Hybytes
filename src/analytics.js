import ReactGA from "react-ga4";

const TRACKING_ID = "G-CEK57SJYD9"; // Replace with your actual Measurement ID

export const initGA = () => {
    ReactGA.initialize(TRACKING_ID);
  };
  
  export const logPageView = (path) => {
    ReactGA.send({ hitType: "pageview", page: path });
  };

  