import {
    container,
    mlAuto,
    section,
    main,
    mainRaised,
    title,
    cardTitle,
    grayColor,
    roseColor, coloredShadow, whiteColor, hexToRgb, description, infoColor
} from "assets/jss/crown-edicts.js";

import tooltipsStyle from "assets/jss/crown-edicts/tooltipsStyle.js";
import imagesStyles from "assets/jss/crown-edicts/imagesStyles.js";
import customSelectStyle from "assets/jss/crown-edicts/customSelectStyle.js";
import imageStyles from "../../../../assets/jss/crown-edicts/imagesStyles";
import rotatingCards from "../../../../assets/jss/crown-edicts/rotatingCards";

const surveyStyle = {
    coloredShadow,
    ...imageStyles,
    ...rotatingCards,
    mlAuto,
    main,
    ...imagesStyles,
    ...customSelectStyle,
    ...tooltipsStyle,
    container: {
        ...container,
        zIndex: 2
    },
    mainRaised: {
        ...mainRaised
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    sectionGray: {
        background: grayColor[14]
    },
    mainPrice: {
        margin: "10px 0px 25px"
    },
    textCenter: {
        textAlign: "center!important"
    },
    features: {
        paddingTop: "30px"
    },
    productPage: {
        backgroundColor: grayColor[2],
        "& $mainRaised": {
            margin: "-40vh 0 0",
            padding: "40px"
        },
        "& .image-gallery-slide img": {
            borderRadius: "3px",
            maxWidth: "300px",
            height: "auto"
        },
        "& .image-gallery-swipe": {
            margin: "30px 0px",
            overflow: "hidden",
            width: "100%",
            height: "auto",
            textAlign: "center"
        },
        "& .image-gallery-thumbnails > .image-gallery-thumbnails-container .image-gallery-thumbnail": {
            "&.active > .image-gallery-thumbnail-inner": {
                opacity: "1",
                borderColor: grayColor[6]
            },
            "& > .image-gallery-thumbnail-inner": {
                width: "80%",
                maxWidth: "85px",
                margin: "0 auto",
                padding: "8px",
                display: "block",
                border: "1px solid transparent",
                background: "transparent",
                borderRadius: "3px",
                opacity: ".8"
            },
            "& > .image-gallery-thumbnail-inner img": {
                borderRadius: "3px",
                width: "100%",
                height: "auto",
                textAlign: "center"
            }
        }
    },
    titleRow: {
        marginTop: "-8vh"
    },
    floatRight: {
        float: "right!important"
    },
    pageHeader: {
        minHeight: "60vh",
        maxHeight: "600px",
        height: "auto",
        backgroundPosition: "top center"
    },
    relatedProducts: {
        marginTop: "50px",
        "& $title": {
            marginBottom: "80px"
        }
    },
    pickSize: {
        marginTop: "50px"
    },
    pullRight: {
        float: "right"
    },
    cardCategory: {
        textAlign: "center",
        marginTop: "10px"
    },
    cardTitle: {
        ...cardTitle,
        textAlign: "center"
    },
    cardDescription: {
        textAlign: "center",
        color: grayColor[0]
    },
    textRose: {
        color: roseColor[0]
    },
    justifyContentBetween: {
        justifyContent: "space-between!important"
    },
    socialFeed: {
        "& p": {
            display: "table-cell",
            verticalAlign: "top",
            overflow: "hidden",
            paddingBottom: "10px",
            maxWidth: 300
        },
        "& i": {
            fontSize: "20px",
            display: "table-cell",
            paddingRight: "10px"
        }
    },
    img: {
        width: "20%",
        marginRight: "5%",
        marginBottom: "5%",
        float: "left"
    },
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
    },
    icon: {
        top: "3px",
        width: "18px",
        height: "18px",
        position: "relative"
    },
    sectionWhite: {
        background: whiteColor
    },
    cardTitleAbsolute: {
        ...cardTitle,
        position: "absolute !important",
        bottom: "15px !important",
        left: "15px !important",
        color: whiteColor + " !important",
        fontSize: "1.125rem !important",
        textShadow: "0 2px 5px rgba(" + hexToRgb(grayColor[9]) + ", 0.5) !important"
    },
    cardTitleWhite: {
        "&, & a": {
            ...title,
            marginTop: ".625rem",
            marginBottom: "0",
            minHeight: "auto",
            color: whiteColor + " !important"
        }
    },
    cardCategorySocial: {
        marginTop: "10px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "22px",
            position: "relative",
            marginTop: "-4px",
            top: "2px",
            marginRight: "5px"
        },
        "& svg": {
            position: "relative",
            top: "5px"
        }
    },
    cardCategorySocialWhite: {
        marginTop: "10px",
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "22px",
            position: "relative",
            marginTop: "-4px",
            top: "2px",
            marginRight: "5px"
        },
        "& svg": {
            position: "relative",
            top: "5px"
        }
    },
    cardCategoryWhite: {
        marginTop: "10px",
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.7)"
    },
    cardCategoryFullWhite: {
        marginTop: "10px",
        color: whiteColor
    },
    cardDescriptionWhite: {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    author: {
        display: "inline-flex",
        "& a": {
            color: grayColor[1]
        }
    },
    authorWhite: {
        display: "inline-flex",
        "& a": {
            color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
        }
    },
    avatar: {
        width: "30px",
        height: "30px",
        overflow: "hidden",
        borderRadius: "50%",
        marginRight: "5px"
    },
    statsWhite: {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
        display: "inline-flex",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            fontSize: "18px",
            lineHeight: "18px"
        },
        "& svg": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "18px",
            height: "18px"
        }
    },
    stats: {
        color: grayColor[0],
        display: "flex",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            fontSize: "18px",
            lineHeight: "18px"
        },
        "& svg": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "18px",
            height: "18px"
        }
    },
    justifyContentCenter: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    iconWrapper: {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
        margin: "10px auto 0",
        width: "130px",
        height: "130px",
        border: "1px solid " + grayColor[14],
        borderRadius: "50%",
        lineHeight: "174px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "55px",
            lineHeight: "55px"
        },
        "& svg": {
            width: "55px",
            height: "55px"
        }
    },
    iconWrapperColor: {
        borderColor: "rgba(" + hexToRgb(whiteColor) + ", 0.25)"
    },
    iconWhite: {
        color: whiteColor
    },
    iconRose: {
        color: roseColor[0]
    },
    iconInfo: {
        color: infoColor[0]
    },
    marginTop30: {
        marginTop: "30px"
    },
    marginBottom20: {
        marginBottom: "20px"
    },
    question: {
        padding: "0 0 80px 0"
    },
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    description: {
        color: grayColor[0]
    }
};

export default surveyStyle;
