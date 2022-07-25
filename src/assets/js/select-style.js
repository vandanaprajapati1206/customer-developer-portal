export const smallSelectStyle = {
  control: (base, state) => ({
    ...base,
    minHeight: 30,
    borderColor: "#BFCCDA",
    borderRadius: "3px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#687d96",
      boxShadow: "none",
    },
    "&:focus": {
      border: "1px solid var(--color-primary-500)",
      paddingTop: "6.5px",
      paddingBottom: "6.5px",
      boxShadow: "none",
    },
    "&:active": {
      border: "1px solid var(--color-primary-500)",
      boxShadow: "none",
    },
  }),
  menu: (base) => ({
    ...base,
    innerHeight: 30,
    zIndex: 2,
  }),
  menuList: (base) => ({
    ...base,
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: 30,
    color: "#394E66",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 5,
    color: "#394E66",
    svg: {
      width: 14,
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    margin: "0",
    backgroundColor: "#BFCCDA",
  }),
};
export const mediumSelectStyle = {
  control: (base, state) => ({
    ...base,
    minHeight: 40,
    borderColor: "#BFCCDA",
    borderRadius: "3px",
  }),
  menu: (base) => ({
    ...base,
    innerHeight: 40,
    zIndex: 2,
  }),
  menuList: (base) => ({
    ...base,
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: 40,
    color: "#394E66",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    margin: "0",
    backgroundColor: "#BFCCDA",
  }),
};
