/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./index.less";
import { useTranslation } from "react-i18next";
import CustomCard from "../common/CustomCard";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Fade, Flip } from "react-reveal";
import CustomCarousel from "../common/CustomCarousel";
import { FastForward, People, Settings } from "@material-ui/icons";
import { apple, android, website, mock } from "../../assets";
import VideoPlayer from "../common/VideoPlayer";
import History from "../../@history";
const Home = (props) => {
  const { t } = useTranslation();
  const [tab, setTab] = useState(1);
  const ImageTab = ({ image, text }) => {
    return (
      <div className="image-tab" style={{ backgroundImage: `url(${image})` }}>
        <div>{text}</div>
      </div>
    );
  };
  useEffect(() => {
    let val = tab;
    const interval = setInterval(() => {
      if (tab < 3) setTab(val + 1);
      else setTab(1);
    }, 5000);
    return () => clearInterval(interval);
  });
  const renderCardContent = () => (
    <div>
      {tab === 1 && (
        <Flip right>
          <ImageTab
            key={1}
            image={website}
            text={
              "Boost your Business with in a smart way by getting a website and manage all your sale and employees in a smarter way.managing your business has never been so easy."
            }
          />
        </Flip>
      )}
      {tab === 2 && (
        <Flip right>
          <ImageTab
            key={2}
            image={android}
            text="this is some text description for this and some of the
                    carousel"
          />
        </Flip>
      )}
      {tab === 3 && (
        <Flip right>
          <ImageTab
            key={3}
            image={apple}
            text="this is some text description for this and some of the
                    carousel"
          />
        </Flip>
      )}
    </div>
  );
  return (
    <React.Fragment>
      <CustomCarousel className="vid-cor" width="100%" autoPlay={true} />
      <Grid className="custom-grid" container>
        <Grid item xs>
          <Fade bottom>
            <CustomCard
              title={t("whatDev")}
              cardButtons={[
                <ButtonGroup key={1}>
                  <Button
                    className={tab === 1 ? "selected" : ""}
                    onClick={() => setTab(1)}
                  >
                    {t("web")}
                  </Button>
                  <Button
                    className={tab === 2 ? "selected" : ""}
                    onClick={() => setTab(2)}
                  >
                    {t("android")}
                  </Button>
                  <Button
                    className={tab === 3 ? "selected" : ""}
                    onClick={() => setTab(3)}
                  >
                    {t("ios")}
                  </Button>
                </ButtonGroup>,
              ]}
              cardContent={[renderCardContent()]}
            />
          </Fade>
        </Grid>
        <Grid className="left-grid" item xs>
          <Fade bottom>
            <CustomCard
              title={t("why")}
              cardContent={[<Paper elevation={3}>{t("whyText")}</Paper>]}
            />
          </Fade>
        </Grid>
      </Grid>
      <Fade bottom>
        <CustomCard
          className="content-card"
          header={null}
          cardContent={[
            <Paper key={1} elevation={3}>
              <CustomCarousel width="50%" />
              <Card className="content-card-content">
                <CardContent>
                  <Typography variant="h3">{t("ourProd")}</Typography>
                  <div className="service-content">
                    <div>
                      <Typography variant="h6">
                        <People />
                        {t("hireDev")}
                      </Typography>
                      <Typography variant="body2">
                        {t("hireDevText")}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h6">
                        <Settings />
                        {t("getService")}
                      </Typography>
                      <Typography variant="body2">
                        {t("getServiceText")}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => History.push("/contacts")}
                    endIcon={<FastForward />}
                  >
                    {t("more")}
                  </Button>
                </CardActions>
              </Card>
            </Paper>,
          ]}
        />
      </Fade>
      <CustomCarousel
        className="about-carousel"
        width="100%"
        autoPlay={false}
        components={[
          <CustomCard
            key={1}
            title={t("aboutUs")}
            cardContent={[
              <Paper key={1} elevation={5}>
                <VideoPlayer video={mock} />
              </Paper>,
            ]}
          />,
          <CustomCard key={2} header={null} />,
        ]}
      />
    </React.Fragment>
  );
};
export default Home;
