import React from "react";
import "./index.less";
import Footer from "./Footer";
import Authpage from "../auth";
import Fade from "react-reveal";
import Header from "./Header";
import Bubbles from "./Particles/Bubbles";
const AppBaseScreen = (props) => {
  return (
    <div className="App">
      <Bubbles
        width="100%"
        height="100%"
        number={70}
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
        size={15}
        animSpeed={5}
      />
      <Authpage />
      <Header />
      <div style={{ minHeight: "40vh" }}>{props.children}</div>
      <Fade bottom>
        <Footer />
      </Fade>
    </div>
  );
};
export default AppBaseScreen;
