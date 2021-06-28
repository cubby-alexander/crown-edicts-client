/*eslint-disable*/ import React, {useState} from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import homePageStyle from "assets/jss/crown-edicts/views/homePageStyle";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import office2 from "../../../assets/img/edicts/jasper.jpg";
import CardBody from "../../../components/Card/CardBody";
import Button from "../../../components/CustomButtons/Button";
import jasper from "../../../assets/img/edicts/jasper.jpg"
import long from "../../../assets/img/edicts/long.jpg"
import medium from "../../../assets/img/edicts/medium.jpg"
import short from "../../../assets/img/edicts/short.jpg"
import undercut from "../../../assets/img/edicts/undercut.jpg"

const useStyles = makeStyles(homePageStyle);

export default function LookbookGallery(props) {
    const [gallery, setGallery] = useState(props.gallery);
    const [showing, setShowing] = useState([]);
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

    const inventoryReduction = async (haircut) => {
        let axiosConfig = {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        };

        let id = haircut._id;
        let newQuantity = {
            quantity: (haircut.quantity - 1)
        }

        console.log(id, newQuantity);

        axios.put(`http://localhost:5000/haircut/update/${id}`, newQuantity, axiosConfig)
            .then(res => console.log(res))
    }

    const deleteHaircut = async (haircut) => {
        let axiosConfig = {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        };

        let id = haircut._id;

        axios.delete(`http://localhost:5000/haircut/${id}`)
    }

    return (
        <div className={classes.displaySection}>
            <GridContainer>
                    {gallery.map((haircut, idx) => {
                        return (
                            <GridItem key={`${haircut} - ${idx}`} xs={12} sm={6} md={6}>
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
                                            <p className={classes.cardTitleWhite}>
                                                {showing.includes(idx) ? haircut.description : ""}
                                            </p>
                                        </a>
                                        <h6>Number Available:  {haircut.quantity > 0 ? haircut.quantity : "Out of Stock"}</h6>
                                        <Button onClick={() => inventoryReduction(haircut)} size="sm" round color="primary">
                                            Buy
                                        </Button>

                                        <Button onClick={() => setEdit(idx)} size="sm" round color="warning">
                                            Edit this look
                                        </Button>

                                        <Button onClick={() => setShowing(prevState => [...prevState, idx])} size="sm" round color="info">
                                            Show
                                        </Button>

                                        <Button onClick={() => deleteHaircut(haircut)} round size="sm" color="danger">
                                            Delete
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