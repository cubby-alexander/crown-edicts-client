import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SurveyCard from "./SurveyCard";

import productStyle from "./surveyStyles";
const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Tell us a little bit about your hair, desired style, and grooming routine</h2>
          <br />
        </GridItem>
      </GridContainer>
      <div className={classes.question}>
        <h3>How long do you want your hair to be?</h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={3} md={3}>
            <SurveyCard
              frontName="Short"
              frontDesc="short"
              img="short"
            />
          </GridItem>
          <GridItem xs={12} sm={3} md={3}>
            <SurveyCard
              frontName="Some Length"
              frontDesc="some"
              img="medium"
            />
          </GridItem>
          <GridItem xs={12} sm={3} md={3}>
            <SurveyCard
              frontName="Long"
              frontDesc="long"
              img="long"

            />
          </GridItem>
        </GridContainer>
      </div>
      {/*<div className={classes.question}>*/}
      {/*  <h3>Which best describes the amount of bend in your hair?</h3>*/}
      {/*  <GridContainer justify="center">*/}
      {/*    <GridItem xs={12} sm={2} md={2}>*/}
      {/*      <SurveyCard*/}
      {/*          frontName="Straight"*/}
      {/*          frontDesc="short"*/}
      {/*          img="long"*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*    <GridItem xs={12} sm={2} md={2}>*/}
      {/*      <SurveyCard*/}
      {/*          frontName="Wavy"*/}
      {/*          frontDesc="short"*/}
      {/*          img="long"*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*    <GridItem xs={12} sm={2} md={2}>*/}
      {/*      <SurveyCard*/}
      {/*          frontName="Loose Curls"*/}
      {/*          frontDesc="some"*/}
      {/*          img="long"*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*    <GridItem xs={12} sm={2} md={2}>*/}
      {/*      <SurveyCard*/}
      {/*          frontName="Curly"*/}
      {/*          frontDesc="long"*/}
      {/*          img="long"*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*    <GridItem xs={12} sm={2} md={2}>*/}
      {/*      <SurveyCard*/}
      {/*          frontName="Tight Curls"*/}
      {/*          frontDesc="long"*/}
      {/*          img="long"*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*  </GridContainer>*/}
      {/*</div>*/}
    </div>
  );
}
