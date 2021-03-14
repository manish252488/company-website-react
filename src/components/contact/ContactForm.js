import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
const ContactForm = (props) => {
  return (
    <div className="contact-form">
      <Typography variant="h3">Contact us:</Typography>
      <TextField
        type="text"
        label="Full Name"
        autoFocus
        variant="standard"
        fullWidth
      />
      <TextField
        type="email"
        label="Email"
        autoFocus
        variant="standard"
        fullWidth
      />
      <TextField
        type="text"
        label="Phone No"
        autoFocus
        variant="standard"
        fullWidth
      />
      <TextField
        type="text"
        label="write down your query here!"
        autoFocus
        variant="outlined"
        rows={10}
        multiline
        fullWidth
      />
      <Button variant="contained" color="primary" fullWidth>
        Send Message
      </Button>
    </div>
  );
};
export default ContactForm;
