import { Paper, Typography } from "@material-ui/core";
import React from "react";
import Bubbles from "./Particles/Bubbles";
import "./index.less";
import PropTypes from "prop-types";
const ProfileCard = (props) => {
  const { content, image, name, skills, about, role, contact } = props;
  return (
    <Paper className="profile-card" elevation={3}>
      <div className="cover">
        <Bubbles
          width="100%"
          height="100%"
          number={200}
          colors={[
            "#9161a0",
            "#e3d8e7",
            "#d6c4db",
            "#ac89b8",
            "#cc2b5e",
            "#d6557e",
            "#e0809e",
            "#ebaabf",
          ]}
          speed={2}
          size={1}
          animSpeed={5}
        />
        <div
          className="profile-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="paper-content">
        {content.length > 0 && content}
        {content.length === 0 && (
          <div className="content">
            <Typography variant="h3">{name}</Typography>
            <Typography variant="h4">{skills}</Typography>
            <Typography variant="h4">{role}</Typography>
            <Typography variant="body2">{about}</Typography>
            <Typography variant="body2">{contact}</Typography>
          </div>
        )}
      </div>
    </Paper>
  );
};
ProfileCard.propTypes = {
  image: PropTypes.string,
  content: PropTypes.array,
  name: PropTypes.string,
  skills: PropTypes.string,
  about: PropTypes.string,
  role: PropTypes.string,
  contact: PropTypes.string,
};
ProfileCard.defaultProps = {
  image: "https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg",
  content: [],
  name: "John Doe",
  role: "",
  contact: "",
  skills: "React, Vue, Node.js etc",
  about:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.",
};
export default ProfileCard;
