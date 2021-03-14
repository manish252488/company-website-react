import { Typography } from "@material-ui/core";
import React from "react";
import CustomCard from "../common/CustomCard";
const Services = (props) => {
  return (
    <div>
      <CustomCard
        header={false}
        cardContent={[
          <Typography variant="h4" align="center" color="textPrimary">
            We will update soon!
          </Typography>,
          <Typography variant="h1" align="center" color="textPrimary">
            😊
          </Typography>,
          <Typography variant="body2" align="center" color="textPrimary">
            <Typography color="error">
              Note: Please, Enquire in the contact panel for any queries
              regarding project maintenance!
            </Typography>
          </Typography>,
        ]}
      />
    </div>
  );
};
export default Services;
