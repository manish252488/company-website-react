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
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import Fade from "react-reveal";
import { showAuthPage } from "../../store/actions";
import { useDispatch } from "react-redux";
import CustomCarousel from "../common/CustomCarousel";
import { FastForward } from "@material-ui/icons";
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
      <CustomCarousel width="98%" />

      <Grid className="custom-grid" container>
        <Grid item xs>
          <Fade bottom>
            <CustomCard
              title="some title"
              cardButtons={[
                <ButtonGroup>
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
          </Fade>
        </Grid>
        <Grid item xs>
          <Fade bottom>
            <CustomCard header={null} />
          </Fade>
        </Grid>
      </Grid>
      <CustomCarousel
        width="100%"
        autoPlay={false}
        components={[
          <CustomCard header={null} />,
          <CustomCard header={null} />,
        ]}
      />
      <Fade bottom>
        <CustomCard
          className="content-card"
          header={null}
          cardContent={[
            <Paper elevation={3}>
              <CustomCarousel width="50%" />
              <Card className="content-card-content">
                <CardContent>
                  <Typography variant="h3">title</Typography>
                  <Typography variant="body2">
                    this is some text description for this and some of the
                    carousel
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button endIcon={<FastForward />}>More</Button>
                </CardActions>
              </Card>
            </Paper>,
          ]}
        />
      </Fade>
    </React.Fragment>
  );
};
export default Home;
