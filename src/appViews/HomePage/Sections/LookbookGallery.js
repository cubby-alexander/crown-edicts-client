/*eslint-disable*/ import React, {useState} from "react";
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
import jasper from "../../../assets/img/edicts/jasper.jpg"
import long from "../../../assets/img/edicts/long.jpg"
import medium from "../../../assets/img/edicts/medium.jpg"
import short from "../../../assets/img/edicts/short.jpg"
import undercut from "../../../assets/img/edicts/undercut.jpg"

const useStyles = makeStyles(homePageStyle);

export default function LookbookGallery(props) {
    const [gallery, setGallery] = useState(props.gallery);
    const classes = useStyles();

    let images = [
        jasper,
        long,
        medium,
        short,
        undercut
    ]

    const setEdit = (number) => {
        props.edit(gallery[number])
    }

    return (
        <div className={classes.displaySection}>
            <GridContainer>
                    {gallery.map((haircut, idx) => {
                        return (
                            <GridItem xs={12} sm={6} md={6}>
                                <Card
                                    raised
                                    background
                                    style={{backgroundImage: `url(${images[idx]})`}}
                                >
                                    <CardBody background>
                                        <h6 className={classes.cardCategory}>{haircut.length}</h6>
                                        <h6>{haircut.imageUrl}</h6>
                                        <a href="#pablito" onClick={e => e.preventDefault()}>
                                            <h3 className={classes.cardTitleWhite}>
                                                {haircut.name}
                                            </h3>
                                        </a>
                                        <h6>Number Available:  {haircut.quantity}</h6>
                                        <Button onClick={() => setEdit(idx)} round color="warning">
                                            Edit this look
                                        </Button>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        )}
                    )}
            </GridContainer>
        </div>
    )
}