import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://donewithit13.herokuapp.com/api",
  },
  staging: {
    apiUrl: "https://donewithit13.herokuapp.com/api",
  },
  prod: {
    apiUrl: "https://donewithit13.herokuapp.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) {
    return settings.dev;
  }
  if (Constants.manifest.releaseChannel === "staging") {
    return settings.staging;
  }
  return settings.prod;
};

export default getCurrentSettings();