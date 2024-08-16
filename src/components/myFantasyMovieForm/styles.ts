const styles = {
  root: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "90%",
    maxWidth: "600px",
    padding: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& > * ": {
      marginTop: 2,
    },
  },
  textField: {
    width: "100%",
  },
  submit: {
    marginRight: 2,
  },
};

export default styles