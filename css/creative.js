import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%",
        "width": "100%"
    },
    "body": {
        "height": "100%",
        "width": "100%",
        "fontFamily": "'Merriweather', 'Helvetica Neue', Arial, sans-serif",
        "webkitTapHighlightColor": "#222222"
    },
    "hr": {
        "borderColor": "#009193",
        "borderWidth": 3,
        "maxWidth": 50
    },
    "hrlight": {
        "borderColor": "white"
    },
    "a": {
        "WebkitTransition": "all 0.35s",
        "MozTransition": "all 0.35s",
        "transition": "all 0.35s",
        "color": "#009193"
    },
    "a:hover": {
        "color": "#005f60"
    },
    "a:focus": {
        "color": "#005f60"
    },
    "h1": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif"
    },
    "h2": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif"
    },
    "h3": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif"
    },
    "h4": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif"
    },
    "h5": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif"
    },
    "h6": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif"
    },
    "p": {
        "fontSize": 16,
        "lineHeight": 1.5,
        "marginBottom": 20
    },
    "bg-primary": {
        "backgroundColor": "#009193"
    },
    "bg-dark": {
        "backgroundColor": "#222222",
        "color": "white"
    },
    "text-faded": {
        "color": "rgba(255, 255, 255, 0.7)"
    },
    "section": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0
    },
    "aside": {
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "no-padding": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "navbar-default": {
        "backgroundColor": "white",
        "borderColor": "rgba(34, 34, 34, 0.05)",
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
        "WebkitTransition": "all 0.35s",
        "MozTransition": "all 0.35s",
        "transition": "all 0.35s"
    },
    "navbar-default navbar-header navbar-brand": {
        "color": "#009193",
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
        "fontWeight": "700",
        "textTransform": "uppercase"
    },
    "navbar-default navbar-header navbar-brand:hover": {
        "color": "#005f60"
    },
    "navbar-default navbar-header navbar-brand:focus": {
        "color": "#005f60"
    },
    "navbar-default navbar-header navbar-toggle": {
        "fontWeight": "700",
        "fontSize": 12,
        "color": "#222222",
        "textTransform": "uppercase"
    },
    "navbar-default nav > li > a": {
        "textTransform": "uppercase",
        "fontWeight": "700",
        "fontSize": 13,
        "color": "#222222"
    },
    "navbar-default nav > li > a:focus": {
        "textTransform": "uppercase",
        "fontWeight": "700",
        "fontSize": 13,
        "color": "#222222"
    },
    "navbar-default nav > li > a:hover": {
        "color": "#009193"
    },
    "navbar-default nav > li > a:focus:hover": {
        "color": "#009193"
    },
    "navbar-default nav > liactive > a": {
        "color": "#009193 !important",
        "backgroundColor": "transparent"
    },
    "navbar-default nav > liactive > a:focus": {
        "color": "#009193 !important",
        "backgroundColor": "transparent"
    },
    "navbar-default nav > liactive > a:hover": {
        "backgroundColor": "transparent"
    },
    "navbar-default nav > liactive > a:focus:hover": {
        "backgroundColor": "transparent"
    },
    "header": {
        "position": "relative",
        "width": "100%",
        "minHeight": "auto",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundPosition": "center",
        "backgroundImage": "url('../img/header4.jpg')",
        "textAlign": "center",
        "color": "white"
    },
    "header header-content": {
        "position": "relative",
        "textAlign": "center",
        "paddingTop": 100,
        "paddingRight": 15,
        "paddingBottom": 100,
        "paddingLeft": 15,
        "width": "100%"
    },
    "header header-content header-content-inner h1": {
        "fontWeight": "700",
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginBottom": 0,
        "fontSize": 30
    },
    "header header-content header-content-inner hr": {
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto"
    },
    "header header-content header-content-inner p": {
        "fontWeight": "300",
        "color": "rgba(255, 255, 255, 0.7)",
        "fontSize": 16,
        "marginBottom": 50
    },
    "header header-content header-content-inner logo-text": {
        "color": "green"
    },
    "jtly-logo logo-text": {
        "fontFamily": "'Abel', sans-serif",
        "color": "#fff"
    },
    "jtly-logo logo-mark": {
        "color": "#fff"
    },
    "section-heading": {
        "marginTop": 0
    },
    "service-box": {
        "maxWidth": 400,
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "service-box p": {
        "marginBottom": 0
    },
    "portfolio-box": {
        "position": "relative",
        "display": "block",
        "maxWidth": 650,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "portfolio-box portfolio-box-caption": {
        "color": "white",
        "opacity": 0,
        "display": "block",
        "background": "rgba(0, 145, 147, 0.9)",
        "position": "absolute",
        "bottom": 0,
        "textAlign": "center",
        "width": "100%",
        "height": "100%",
        "WebkitTransition": "all 0.35s",
        "MozTransition": "all 0.35s",
        "transition": "all 0.35s"
    },
    "portfolio-box portfolio-box-caption portfolio-box-caption-content": {
        "width": "100%",
        "textAlign": "center",
        "position": "absolute",
        "top": "50%",
        "transform": "translateY(-50%)"
    },
    "portfolio-box portfolio-box-caption portfolio-box-caption-content project-category": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "textTransform": "uppercase",
        "fontWeight": "600",
        "fontSize": 14
    },
    "portfolio-box portfolio-box-caption portfolio-box-caption-content project-name": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "fontSize": 18
    },
    "portfolio-box:hover portfolio-box-caption": {
        "opacity": 1
    },
    "portfolio-box:focus": {
        "outline": "none"
    },
    "call-to-action h2": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto"
    },
    "text-primary": {
        "color": "#009193"
    },
    "no-gutter > [class*='col-']": {
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "btn-default": {
        "color": "#222222",
        "backgroundColor": "white",
        "borderColor": "white",
        "WebkitTransition": "all 0.35s",
        "MozTransition": "all 0.35s",
        "transition": "all 0.35s"
    },
    "btn-default:hover": {
        "color": "#222222",
        "backgroundColor": "#f2f2f2",
        "borderColor": "#ededed"
    },
    "btn-default:focus": {
        "color": "#222222",
        "backgroundColor": "#f2f2f2",
        "borderColor": "#ededed"
    },
    "btn-defaultfocus": {
        "color": "#222222",
        "backgroundColor": "#f2f2f2",
        "borderColor": "#ededed"
    },
    "btn-default:active": {
        "color": "#222222",
        "backgroundColor": "#f2f2f2",
        "borderColor": "#ededed",
        "backgroundImage": "none"
    },
    "btn-defaultactive": {
        "color": "#222222",
        "backgroundColor": "#f2f2f2",
        "borderColor": "#ededed",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-default": {
        "color": "#222222",
        "backgroundColor": "#f2f2f2",
        "borderColor": "#ededed",
        "backgroundImage": "none"
    },
    "btn-defaultdisabled": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-default[disabled]": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "fieldset[disabled] btn-default": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-defaultdisabled:hover": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-default[disabled]:hover": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "fieldset[disabled] btn-default:hover": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-defaultdisabled:focus": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-default[disabled]:focus": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "fieldset[disabled] btn-default:focus": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-defaultdisabledfocus": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-default[disabled]focus": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "fieldset[disabled] btn-defaultfocus": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-defaultdisabled:active": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-default[disabled]:active": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "fieldset[disabled] btn-default:active": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-defaultdisabledactive": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-default[disabled]active": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "fieldset[disabled] btn-defaultactive": {
        "backgroundColor": "white",
        "borderColor": "white"
    },
    "btn-default badge": {
        "color": "white",
        "backgroundColor": "#222222"
    },
    "btn-primary": {
        "color": "white",
        "backgroundColor": "#009193",
        "borderColor": "#009193",
        "WebkitTransition": "all 0.35s",
        "MozTransition": "all 0.35s",
        "transition": "all 0.35s"
    },
    "btn-primary:hover": {
        "color": "white",
        "backgroundColor": "#00787a",
        "borderColor": "#006e6f"
    },
    "btn-primary:focus": {
        "color": "white",
        "backgroundColor": "#00787a",
        "borderColor": "#006e6f"
    },
    "btn-primaryfocus": {
        "color": "white",
        "backgroundColor": "#00787a",
        "borderColor": "#006e6f"
    },
    "btn-primary:active": {
        "color": "white",
        "backgroundColor": "#00787a",
        "borderColor": "#006e6f",
        "backgroundImage": "none"
    },
    "btn-primaryactive": {
        "color": "white",
        "backgroundColor": "#00787a",
        "borderColor": "#006e6f",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-primary": {
        "color": "white",
        "backgroundColor": "#00787a",
        "borderColor": "#006e6f",
        "backgroundImage": "none"
    },
    "btn-primarydisabled": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primary[disabled]": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "fieldset[disabled] btn-primary": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primarydisabledfocus": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primary[disabled]focus": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "fieldset[disabled] btn-primaryfocus": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primarydisabled:active": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primary[disabled]:active": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "fieldset[disabled] btn-primary:active": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primarydisabledactive": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primary[disabled]active": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "fieldset[disabled] btn-primaryactive": {
        "backgroundColor": "#009193",
        "borderColor": "#009193"
    },
    "btn-primary badge": {
        "color": "#009193",
        "backgroundColor": "white"
    },
    "btn": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
        "border": "none",
        "borderRadius": 300,
        "fontWeight": "700",
        "textTransform": "uppercase"
    },
    "btn-xl": {
        "paddingTop": 15,
        "paddingRight": 30,
        "paddingBottom": 15,
        "paddingLeft": 30
    },
    "::-moz-selection": {
        "color": "white",
        "textShadow": "none",
        "background": "#222222"
    },
    "::selection": {
        "color": "white",
        "textShadow": "none",
        "background": "#222222"
    },
    "img::selection": {
        "color": "white",
        "background": "transparent"
    },
    "img::-moz-selection": {
        "color": "white",
        "background": "transparent"
    }
});