import React, { useState } from "react";
import "./index.less";
import { useTranslation } from "react-i18next";
import CustomCard from "../common/CustomCard";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import CustomCarousel from "../common/CustomCarousel";
const Home = (props) => {
  const { t } = useTranslation();
  const [tab, setTab] = useState(1);
  const renderCardContent = () => (
    <div>
      {tab === 1 && <div>1</div>}
      {tab === 2 && <div>2</div>}
      {tab === 3 && <div>3</div>}
    </div>
  );
  return (
    <React.Fragment>
      <CustomCard
        title="some title"
        cardButtons={[
          <ButtonGroup key={1}>
            <Button
              className={tab === 1 ? "selected" : ""}
              onClick={() => setTab(1)}
            >
              tab1
            </Button>
            <Button
              className={tab === 2 ? "selected" : ""}
              onClick={() => setTab(2)}
            >
              TAB2
            </Button>
            <Button
              className={tab === 3 ? "selected" : ""}
              onClick={() => setTab(3)}
            >
              TAB3
            </Button>
          </ButtonGroup>,
        ]}
        cardContent={[renderCardContent()]}
      />
    </React.Fragment>
  );
};
export default Home;
