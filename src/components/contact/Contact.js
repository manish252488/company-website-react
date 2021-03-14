import { Card, CardContent, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Fade } from "react-reveal";
import CustomCard from "../common/CustomCard";
import GoogleMap from "../common/GoogleMap";
import Bubbles from "../common/Particles/Bubbles";
import ProfileCard from "../common/ProfileCard";
import ContactForm from "./ContactForm";
import "./index.less";
const Contact = (props) => {
  return (
    <div className="contact-card">
      <Fade bottom>
        <CustomCard
          className="detail-card"
          header={null}
          cardContent={[<ProfileCard />, <ProfileCard />, <ProfileCard />]}
        />
      </Fade>
      <Fade bottom>
        <CustomCard
          className="content-card"
          header={null}
          cardContent={[
            <Paper elevation={3}>
              <Paper elevation={4}>
                <GoogleMap />
              </Paper>
              <Card className="content-card-content">
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </Paper>,
          ]}
        />
      </Fade>
    </div>
  );
};
export default Contact;
