import React from "react";
import "./index.less";
import { useTranslation } from "react-i18next";
import Footer from "../common/Footer";
const Home = (props) => {
  const { t, i18n } = useTranslation();
  return <Footer />;
};
export default Home;
