/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import LookbookGallery from "./Sections/LookbookGallery";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import homePageStyle from "assets/jss/crown-edicts/views/homePageStyle";

// Sections for this page
import Survey from "./Sections/Survey/Survey.js";
import axios from "axios";
import NewHaircut from "./Sections/NewHaircut/NewHaircut";
// import SectionTeam from "./Sections/SectionTeam.js";
// import SectionWork from "./Sections/SectionWork.js";

const useStyles = makeStyles(homePageStyle);

export default function LandingPage({ ...rest }) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    const getLookbook = () => {
        axios
            .get("http://https://crown-edicts-server.herokuapp.com//haircuts")
            .then((res) => console.log(res.data, "This from Axios"));
    }

    return (
        <div>
            <Header
                color="transparent"
                brand=""
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                changeColorOnScroll={{
                    height: 300,
                    color: "primary"
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/edicts/undercut.jpg")} filter="dark">
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                            <h1 className={classes.title}>Hairstyles for your hair - not someone else's</h1>
                            <h4>
                                Your hair isn't special, but it's close. Why pick a style that isn't suited to you?
                                Length, texture, bend, grooming routines, and more all affect how your hair can be styled.
                                <br />
                                <br />
                                Crown Edicts is a tool to help you find a style that works for you.
                            </h4>
                            <br />
                            <Button
                                color="danger"
                                size="lg"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                                target="_blank"
                            >
                                Find My Style
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <Survey />
            </div>

            <LookbookGallery
                lookbook={getLookbook()}
            />

            <NewHaircut />

            <Footer
                content={
                    <div>
                        <div className={classes.left}>
                            <List className={classes.list}>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/?ref=mkpr-landing"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        Creative Tim
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/presentation?ref=mkpr-landing"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        About us
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a href="//blog.creative-tim.com/" className={classes.block}>
                                        Blog
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/license?ref=mkpr-landing"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        Licenses
                                    </a>
                                </ListItem>
                            </List>
                        </div>
                        <div className={classes.right}>
                            &copy; {1900 + new Date().getYear()} , made with{" "}
                            <Favorite className={classes.icon} /> by{" "}
                            <a
                                href="https://www.creative-tim.com/?ref=mkpr-landing"
                                target="_blank"
                            >
                                Creative Tim
                            </a>{" "}
                            for a better web.
                        </div>
                    </div>
                }
            />
        </div>
    );
}
