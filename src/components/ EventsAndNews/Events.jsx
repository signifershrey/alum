import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "5%",
    // maxwidth: "30vw",
    background: "black",
    color: "white",
  },
  title: {
    fontSize: 14,
  },
});

const CustomSlider = () => {
  const classes = useStyles();

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h1>Latest News and Updates</h1>
      <Slider {...settings}>
        <div >
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="inherit"
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant="h5" component="h2">
                Weekly Update of Covid War Room Initiatives
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="inherit" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant="h5" component="h2">
                Weekly Update of Covid War Room Initiatives
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="inherit" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant="h5" component="h2">
                Weekly Update of Covid War Room Initiatives
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="inherit" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant="h5" component="h2">
                Weekly Update of Covid War Room Initiatives
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="inherit" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant="h5" component="h2">
                Weekly Update of Covid War Room Initiatives
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="inherit" color="inherit" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant="h5" component="h2">
                Weekly Update of Covid War Room Initiatives
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="inherit" color="inherit" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant="h5" component="h2">
                Weekly Update of Covid War Room Initiatives
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="inherit" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant="h5" component="h2">
                Weekly Update of Covid War Room Initiatives
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="inherit" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant="h5" component="h2">
                Weekly Update of Covid War Room Initiatives
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="inherit" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
      </Slider>
    </div>
  );
};
export default CustomSlider;
