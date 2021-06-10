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

export default function HaircutForm() {
    const classes = useStyles();
    const [name, setName] = React.useState("");
    const [length, setLength] = React.useState("");
    const [quantity, setQuantity] = React.useState(0);
    const [description, setDescription] = React.useState("");
    const [url, setUrl] = React.useState("../../../assets/img/edicts/jasper.jpg");

    const addHaircut = () => {
        const newHaircut = {
            name,
            length,
            quantity: parseInt(quantity),
            imageUrl: url,
            description
        }
        axios
            .post("http://https://crown-edicts-server.herokuapp.com//haircuts/add", newHaircut)
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
                        <h4 className={classes.cardTitle}>New Haircut Details</h4>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={6}>
                                <CustomInput
                                    labelText="Name"
                                    id="haircut-name"
                                    inputProps={{
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
                                onChange: (e) => setDescription(e.target.value),
                                multiline: true,
                                rows: 5
                            }}
                        />
                    </CardBody>
                    <CardFooter className={classes.justifyContentCenter}>
                        <Button color="secondary" className={classes.pullRight} onClick={() => addHaircut()}>
                            Add New Haircut
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </GridItem>
    )
}