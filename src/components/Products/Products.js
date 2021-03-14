import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./index.less";
import ProfileCard from "../common/ProfileCard";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal";
import CustomCard from "../common/CustomCard";
import CustomCarousel from "../common/CustomCarousel";
const Products = (props) => {
  const { t } = useTranslation();
  return (
    <Container className="product-container" maxWidth="lg">
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
                {/* 
                <CardActions>
                  <Button endIcon={<FastForward />}>More</Button>
                </CardActions> */}
              </Card>
            </Paper>,
          ]}
        />
      </Fade>
      <Fade bottom>
        <Grid container spacing={4} xs>
          <Grid item xs>
            <ProfileCard name={t("web")} />
          </Grid>
          <Grid item xs>
            <ProfileCard name={t("mobileDev")} />
          </Grid>
          <Grid item xs>
            <ProfileCard name={t("softDev")} />
          </Grid>
          <Grid item xs>
            <ProfileCard name={"rts"} />
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};
export default Products;
