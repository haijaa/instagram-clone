export const storeValue = (key, value) => {
  if (process.client) {
    localStorage.setItem(key, value);
  } else {
    console.warn("localStorage is not available on the server side.");
  }
};

export const getValue = (key) => {
  if (process.client) {
    return localStorage.getItem(key);
  } else {
    console.warn("localStorage is not available on the server side.");
    return null;
  }
};

export const isUserLoggedIn = (namevalue, statusvalue) => {
  getValue("loginUsername");
  if (namevalue === "" || namevalue === null) {
    statusvalue.value = true;
  }
};

export const openDialog = (state, startingValue, buffer) => {
  state = true;
  startingValue = 0;
  buffer = 0;

  let progressInterval = setInterval(() => {
    if (startingValue >= 100) {
      clearInterval(progressInterval);
      state = false;
    } else {
      startingValue += 1;
      buffer = startingValue + 1;
    }
  }, 100);
};
