import React from "react";
import Card from "../../../../components/Card/Card";
import short from "../../../../assets/img/edicts/short.jpg";
import medium from "../../../../assets/img/edicts/medium.jpg";
import long from "../../../../assets/img/edicts/long.jpg";
import CardBody from "../../../../components/Card/CardBody";
import Button from "../../../../components/CustomButtons/Button";
import Refresh from "@material-ui/icons/Refresh";
import Subject from "@material-ui/icons/Subject";
import Icon from "@material-ui/core/Icon";
import Delete from "@material-ui/icons/Delete";

import {makeStyles} from "@material-ui/core/styles";
import styles from "./surveyStyles";

const useStyles = makeStyles(styles);

export default function SurveyCard(props) {
    const classes = useStyles();
    const [activeRotate1, setActiveRotate1] = React.useState("");
    const [activeRotate2, setActiveRotate2] = React.useState("");
    React.useEffect(() => {
        if (window) {
            window.addEventListener("resize", addStylesForRotatingCards);
        }
        addStylesForRotatingCards();
        return function cleanup() {
            if (window) {
                window.removeEventListener("resize", addStylesForRotatingCards);
            }
        };
    });
const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
        var rotatingCard = rotatingCards[i];
        var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
        var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
        cardFront.style.height = "unset";
        cardFront.style.width = "unset";
        cardBack.style.height = "unset";
        cardBack.style.width = "unset";
        var rotatingWrapper = rotatingCard.parentElement;
        var cardWidth = rotatingCard.parentElement.offsetWidth;
        var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
        rotatingWrapper.style.height = cardHeight + "px";
        rotatingWrapper.style["margin-bottom"] = 30 + "px";
        cardFront.style.height = "unset";
        cardFront.style.width = "unset";
        cardBack.style.height = "unset";
        cardBack.style.width = "unset";
        cardFront.style.height = cardHeight + 35 + "px";
        cardFront.style.width = cardWidth + "px";
        cardBack.style.height = cardHeight + 35 + "px";
        cardBack.style.width = cardWidth + "px";
    }
};

const descriptions = {
    short: "Anything from a tight buzz to a few inches of length",
    some: "Enough length for your hair to fall loose, but not past your ears or jaw.",
    long: "Loose hair that falls past your ears, down to your shoulders or longer"
};

const images = {
    short: short,
    medium: medium,
    long: long,
}

    return (
        <div
            className={
                classes.rotatingCardContainer +
                " " +
                classes.manualRotate +
                " " +
                activeRotate2
            }
        >
            <Card className={classes.cardRotate}>
                <div
                    className={
                        classes.front + " " + classes.wrapperBackground
                    }
                    style={{ backgroundImage: `url(${images[props.img]})` }}
                >
                    <a href="" onClick={(e) => {
                        e.preventDefault();
                        setActiveRotate2(classes.activateRotate);
                    }}>
                        <CardBody
                            background
                            className={classes.cardBodyRotate}

                        >

                                <h3 className={classes.cardTitleWhite}>
                                    {props.frontName}
                                </h3>
                                <p className={classes.cardDescriptionWhite}>
                                    {descriptions[props.frontDesc]}
                                </p>

                            <div className={classes.textCenter}>
                                {/*<Button*/}
                                {/*    round*/}
                                {/*    color="secondary"*/}
                                {/*    onClick={() =>*/}
                                {/*        setActiveRotate2(classes.activateRotate)*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    Select*/}
                                {/*</Button>*/}
                            </div>
                        </CardBody>
                    </a>
                </div>
                <div
                    className={classes.back + " " + classes.wrapperBackground}
                    style={{ backgroundImage: `url(${images[props.img]})` }}
                >
                    <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                        <p className={classes.cardDescriptionWhite}>
                            As an Admin, you have shortcuts to edit, view or
                            delete the posts.
                        </p>
                        <div className={classes.textCenter}>
                            <Button round justIcon color="info">
                                <Subject />
                            </Button>
                            <Button round justIcon color="success">
                                <Icon>mode_edit</Icon>
                            </Button>
                            <Button round justIcon color="danger">
                                <Delete />
                            </Button>
                            <br />
                            <br />
                            <Button
                                round
                                color="primary"
                                onClick={() => setActiveRotate2("")}
                            >
                                <Refresh /> Un-select
                            </Button>
                        </div>
                    </CardBody>
                </div>
            </Card>
        </div>
    )
}