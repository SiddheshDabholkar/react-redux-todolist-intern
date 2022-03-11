export const getInitialState = (key, initialState) => {
  const values = window.localStorage.getItem(key);
  if (values) {
    const valuesArray = JSON.parse(values);
    return valuesArray;
  } else {
    window.localStorage.setItem(key, JSON.stringify(initialState));
    return initialState;
  }
};
