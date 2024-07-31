export const blankToNull = (obj) => {
  const object = { ...obj };

  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (String(value).replace(/\s+/, '') === '') {
      object[key] = null;
    }
  });
  return object;
};
