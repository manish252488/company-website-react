import React, { useState } from "react";
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
import Fade from "react-reveal";
import CustomCarousel from "../common/CustomCarousel";
import { FastForward } from "@material-ui/icons";
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
  const renderCardContent = () => (
    <div>
      {tab === 1 && (
        <ImageTab
          image="https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background-og.jpg"
          text="this is some text description for this and some of the
                    carousel"
        />
      )}
      {tab === 2 && (
        <ImageTab
          image="https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background-og.jpg"
          text="this is some text description for this and some of the
                    carousel"
        />
      )}
      {tab === 3 && (
        <ImageTab
          image="https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background-og.jpg"
          text="this is some text description for this and some of the
                    carousel"
        />
      )}
    </div>
  );
  return (
    <React.Fragment>
      <Fade bottom>
        <CustomCarousel autoPlay={true} width="100%" />
      </Fade>
      <Grid className="custom-grid" container>
        <Grid item xs>
          <Fade bottom>
            <CustomCard
              title={t("whatDev")}
              cardButtons={[
                <ButtonGroup>
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
            <Paper elevation={3}>
              <CustomCarousel width="50%" />
              <Card className="content-card-content">
                <CardContent>
                  <Typography variant="h3">{t("ourProd")}</Typography>
                  <Typography variant="body2">{t("ourProdDesc")}</Typography>
                </CardContent>
                <CardActions>
                  <Button endIcon={<FastForward />}>More</Button>
                </CardActions>
              </Card>
            </Paper>,
          ]}
        />
      </Fade>
      <Fade bottom>
        <CustomCarousel
          className="about-carousel"
          width="100%"
          autoPlay={false}
          components={[
            <CustomCard
              title={t("aboutUs")}
              cardContent={[<Paper elevation={5}></Paper>]}
            />,
            <CustomCard header={null} />,
          ]}
        />
      </Fade>
    </React.Fragment>
  );
};
export default Home;
