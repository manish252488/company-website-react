import React from "react";
import "./index.less";
import { useTranslation } from "react-i18next";
import CustomCarousel from "../common/CustomCarousel";

const Home = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <CustomCarousel />
    </div>
  );
};
export default Home;
