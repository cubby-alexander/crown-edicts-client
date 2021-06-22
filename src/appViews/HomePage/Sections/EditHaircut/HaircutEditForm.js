import React from "react";

import Card from "../../../../components/Card/Card";
import CardHeader from "../../../../components/Card/CardHeader";
import CardBody from "../../../../components/Card/CardBody";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import CardFooter from "../../../../components/Card/CardFooter";
import Button from "../../../../components/CustomButtons/Button";

import haircutFormStyles from "./haircutFormStyles";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(haircutFormStyles);

export default function HaircutEditForm(props) {
    const classes = useStyles();
    const [name, setName] = React.useState(props.name);
    const [length, setLength] = React.useState(props.length);
    const [quantity, setQuantity] = React.useState(props.quantity);
    const [description, setDescription] = React.useState(props.description);
    const [url, setUrl] = React.useState("../../../assets/img/edicts/jasper.jpg");

    const addHaircut = () => {
        let axiosConfig = {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        };

        const newHaircut = {
            name,
            length,
            quantity: parseInt(quantity),
            imageUrl: url,
            description
        }
        axios
            .put(`http://crown-edicts-server.herokuapp.com/haircuts/edit/${name}`, newHaircut, axiosConfig)
            .then((res) => console.log(res.data, "This from Axios"));
    }

    return (
        <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
            <Card className={classes.card1}>
                <form>
                    <CardHeader
                        contact
                        color="primary"
                        className={classes.textCenter}
                    >
                        <h4 className={classes.cardTitle}>Edit Haircut Details</h4>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={6}>
                                <CustomInput
                                    labelText="Name"
                                    id="haircut-name"
                                    inputProps={{
                                        value: props.name,
                                        onChange: (e) => setName(e.target.value),
                                    }}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={6}>
                                <CustomInput
                                    labelText="Length"
                                    id="haircut-length"
                                    inputProps={{
                                        value: props.length,
                                        onChange: (e) => setLength(e.target.value),
                                    }}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <CustomInput
                            labelText="Quantity"
                            id="quantity"
                            inputProps={{
                                value: props.quantity,
                                onChange: (e) => setQuantity(e.target.value)
                            }}
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                        <CustomInput
                            labelText="Image URL"
                            id="image-url"
                            inputProps={{
                                value: "../../../assets/img/edicts/jasper.jpg",
                                onChange: (e) => setUrl(e.target.value),
                            }}
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                        <CustomInput
                            labelText="Description"
                            id="message"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                value: props.description,
                                onChange: (e) => setDescription(e.target.value),
                                multiline: true,
                                rows: 5
                            }}
                        />
                    </CardBody>
                    <CardFooter className={classes.justifyContentCenter}>
                        <Button color="secondary" className={classes.pullRight} onClick={() => addHaircut()}>
                            Edit Haircut
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </GridItem>
    )
}