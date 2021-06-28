import classNames from "classnames";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import React from "react";

import homePageStyle from "assets/jss/crown-edicts/views/homePageStyle";
import {makeStyles} from "@material-ui/core/styles";
import HaircutForm from "./HaircutForm";

const useStyles = makeStyles(homePageStyle);

export default function NewHaircut() {
    const classes = useStyles();
    return (
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12}>
                        <h2 className={classes.title}>Add a new hairstyle</h2>
                    </GridItem>
                    <HaircutForm />
                    <GridItem xs={12} sm={6}>
                        <div>Stuff</div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}