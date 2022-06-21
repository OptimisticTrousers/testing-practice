const capitalize = (string) => {
  if (typeof string === "string") {
    return (string = string.slice(0, 1).toUpperCase() + string.slice(1));
  }

  return "ERROR";
};

module.exports = capitalize;
