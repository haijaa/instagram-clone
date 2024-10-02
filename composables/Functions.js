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
