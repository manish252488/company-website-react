import { Button, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import React from "react";
import { useTranslation } from "react-i18next";
const ContactForm = (props) => {
  const { t } = useTranslation();
  return (
    <div className="contact-form">
      <Typography variant="h3">{t("contactUs")}:</Typography>
      <TextField
        type="text"
        label={t("fullName")}
        variant="standard"
        fullWidth
      />
      <TextField type="email" label={t("email")} variant="standard" fullWidth />
      <TextField
        type="text"
        label={t("phoneNo")}
        variant="standard"
        fullWidth
      />
      <TextField
        type="text"
        label={t("writeQuery")}
        variant="outlined"
        rows={10}
        multiline
        fullWidth
      />
      <Button endIcon={<Send />} variant="contained" color="primary" fullWidth>
        {t("sendMessage")}
      </Button>
    </div>
  );
};
export default ContactForm;
