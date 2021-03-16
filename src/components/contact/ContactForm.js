import { Button, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const ContactForm = (props) => {
  const { t } = useTranslation();
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState([]);
  const type = {
    name: "name",
    email: "email",
    contact: "contact",
    query: "query",
  };
  const emptyField = "Field cannot be empty!";
  const send = () => {
    setError([]);
    let flag = true;
    if (!fName || fName === "") {
      setError([...error, { type: type.name, error: emptyField }]);
      flag = false;
    }
    if (!email || email === "") {
      setError([...error, { type: type.email, error: emptyField }]);
      flag = false;
    }
    if (!contact || contact === "") {
      setError([...error, { type: type.contact, error: emptyField }]);
      flag = false;
    }
    if (!desc || desc === "") {
      setError([...error, { type: type.query, error: emptyField }]);
      flag = false;
    }
    console.log(error);
    if (flag) {
      //send email
    }
  };
  const findErrorValue = (typ) => {
    return error.find((val) => val.type === typ)?.error;
  };
  return (
    <div className="contact-form">
      <Typography variant="h3">{t("contactUs")}:</Typography>
      <TextField
        type="text"
        label={t("fullName")}
        variant="standard"
        value={fName}
        onChange={(text) => setFName(text.target.value)}
        helperText={findErrorValue(type.name)}
        fullWidth
      />
      <TextField
        value={email}
        type="email"
        label={t("email")}
        variant="standard"
        onChange={(text) => setEmail(text.target.value)}
        helperText={findErrorValue(type.email)}
        fullWidth
      />
      <TextField
        type="text"
        label={t("phoneNo")}
        value={contact}
        variant="standard"
        onChange={(text) => setContact(text.target.value)}
        helperText={findErrorValue(type.contact)}
        fullWidth
      />
      <TextField
        value={desc}
        type="text"
        onChange={(text) => setDesc(text.target.value)}
        label={t("writeQuery")}
        variant="outlined"
        helperText={findErrorValue(type.query)}
        rows={10}
        multiline
        fullWidth
      />
      <Button
        endIcon={<Send />}
        onClick={send}
        variant="contained"
        color="primary"
        fullWidth
      >
        {t("sendMessage")}
      </Button>
    </div>
  );
};
export default ContactForm;
