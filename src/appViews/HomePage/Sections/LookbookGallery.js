/*eslint-disable*/ import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import homePageStyle from "assets/jss/crown-edicts/views/homePageStyle";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import office2 from "../../../assets/img/edicts/jasper.jpg";
import CardBody from "../../../components/Card/CardBody";
import Button from "../../../components/CustomButtons/Button";
import Icon from "@material-ui/core/Icon";
import cardBlog3 from "../../../assets/img/examples/card-blog3.jpg";
import Build from "@material-ui/icons/Build";
import cardProject6 from "../../../assets/img/examples/card-project6.jpg";
import Subject from "@material-ui/icons/Subject";

const useStyles = makeStyles(homePageStyle);

export default function LookbookGallery(props) {
    const classes = useStyles();
    return (
        <div className={classes.displaySection}>
            <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                    <Card
                        raised
                        background
                        style={{ backgroundImage: `url(${office2})` }}
                    >
                        <CardBody background>
                            <h6 className={classes.cardCategory}>PRODUCTIVITY</h6>
                            <a href="#pablito" onClick={e => e.preventDefault()}>
                                <h3 className={classes.cardTitleWhite}>
                                    The Best Productivity Apps on Market
                                </h3>
                            </a>
                            <p className={classes.cardDescription}>
                                Don{"'"}t be scared of the truth because we need to restart
                                the human foundation in truth And I love you like Kanye
                                loves Kanye I love Rick Owens’ bed design but the back is...
                            </p>
                            <Button round color="danger">
                                <Icon>content_copy</Icon> View App
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                    <Card
                        raised
                        background
                        style={{ backgroundImage: `url(${cardBlog3})` }}
                    >
                        <CardBody background>
                            <h6 className={classes.cardCategory}>DESIGN</h6>
                            <a href="#pablito" onClick={e => e.preventDefault()}>
                                <h3 className={classes.cardTitleWhite}>
                                    The Sculpture Where Details Matter
                                </h3>
                            </a>
                            <p className={classes.cardDescription}>
                                Don{"'"}t be scared of the truth because we need to restart
                                the human foundation in truth And I love you like Kanye
                                loves Kanye I love Rick Owens’ bed design but the back is...
                            </p>
                            <Button round color="info">
                                <Build />
                                View Project
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card
                        raised
                        background
                        style={{ backgroundImage: `url(${cardProject6})` }}
                    >
                        <CardBody background>
                            <h6 className={classes.cardCategory}>MARKETING</h6>
                            <a href="#pablito" onClick={e => e.preventDefault()}>
                                <h3 className={classes.cardTitleWhite}>
                                    0 to 100.000 Customers in 6 months
                                </h3>
                            </a>
                            <p className={classes.cardDescription}>
                                Don{"'"}t be scared of the truth because we need to restart
                                the human foundation in truth And I love you like Kanye
                                loves Kanye I love Rick Owens’ bed design but the back is...
                            </p>
                            <Button round color="warning">
                                <Subject /> Case study
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}