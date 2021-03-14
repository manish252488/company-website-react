import { Card, CardActions, CardContent, CardHeader } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import "./index.less";
const CustomCard = (props) => {
  return (
    <Card className={"custom-card " + props.className}>
      {props.header && (
        <CardHeader
          className="custom-card-header"
          title={props.title}
          action={props.cardButtons}
        />
      )}
      <CardContent className="custom-card-content">
        {props.cardContent}
      </CardContent>
      <CardActions className="custom-card-actions">
        {props.cardActions}
      </CardActions>
    </Card>
  );
};
CustomCard.propTypes = {
  cardActions: PropTypes.array,
  cardButtons: PropTypes.array,
  cardContent: PropTypes.array,
  title: PropTypes.string,
  header: PropTypes.any,
};
CustomCard.defaultProps = {
  title: "title",
  header: true,
};
export default CustomCard;
