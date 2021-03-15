import {
  ComputerOutlined,
  Facebook,
  LocationOnOutlined,
  MailOutlined,
  PhoneAndroidOutlined,
  PhoneIphoneOutlined,
} from "@material-ui/icons";
import React from "react";
import "./index.less";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import LanguageSelect from "../common/LanguageSelect";
import { useTranslation } from "react-i18next";
const Footer = (props) => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="content">
        <div className="col col1">
          <Typography variant="h3" className="title-light">
            {t("fText")}
          </Typography>
          <List>
            <ListItem>
              <ListItemText className="font-sm">{t("fText2")}</ListItemText>
            </ListItem>
          </List>
          <LanguageSelect />
        </div>
        <div className="col col2">
          <Typography variant="h3" className="title-light">
            {t("products")}:
          </Typography>
          <List>
            <ListItem key={2}>
              <ListItemIcon>
                <ComputerOutlined />
              </ListItemIcon>
              <ListItemText primary={`Web ${t("development")}`} />
            </ListItem>
            <ListItem key={3}>
              <ListItemIcon>
                <PhoneAndroidOutlined />
              </ListItemIcon>
              <ListItemText primary={`Android ${t("development")}`} />
            </ListItem>
            <ListItem key={1}>
              <ListItemIcon>
                <PhoneIphoneOutlined />
              </ListItemIcon>
              <ListItemText primary={`IOS ${t("development")}`} />
            </ListItem>
          </List>
        </div>
        <div className="col col3">
          <List component="nav" aria-label="main mailbox folders">
            <Typography variant="h3" className="title-light">
              {t("contacts")}:
            </Typography>
            <ListItem key={1}>
              <ListItemIcon>
                <PhoneAndroidOutlined />
              </ListItemIcon>
              <ListItemText primary="+91 7004703084" />
            </ListItem>
            <ListItem key={2}>
              <ListItemIcon>
                <MailOutlined />
              </ListItemIcon>
              <ListItemText primary="manish25.manish2488@gmail.com" />
            </ListItem>
            <ListItem key={3}>
              <ListItemIcon>
                <LocationOnOutlined />
              </ListItemIcon>
              <ListItemText primary="manish25.manish2488@gmail.com" />
            </ListItem>
          </List>
        </div>
      </div>
      <div className="social-icons">
        <div>
          <Facebook />
        </div>
        <div>
          <Facebook />
        </div>
        <div>
          <Facebook />
        </div>
      </div>
    </div>
  );
};
export default Footer;
