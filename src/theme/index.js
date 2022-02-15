import { createTheme } from "@material-ui/core/styles";

import checkIcon from "../assets/img/icon_check.svg";

const $Nunito = '"Nunito", sans-serif';

const theme = createTheme({
  palette: {
    primary: {
      main: "#3360AD",
    },
    error: {
      main: "#EA1763",
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        "@media screen and (min-width: 600px)": {
          "&": {
            paddingLeft: 64,
            paddingRight: 64,
          },
        },
      },
      maxWidthLg: {
        "@media screen and (min-width: 600px)": {
          "&": {
            maxWidth: 1440,
          },
        },
      },
    },
    MuiLinearProgress: {
      root: {},
      colorPrimary: {
        backgroundColor: "#CED4DF",
      },
    },
    MuiCircularProgress: {
      root: {
        transition: "width .3s ease, hight .3s ease",
      },
    },
    MuiButton: {
      root: {
        boxShadow: "0px 0px 8px rgba(45, 53, 67, 0.12)",
        borderRadius: 8,
        textTransform: "none",
        fontFamily: '"Nunito", sans-serif',
        height: 42,
        whiteSpace: "nowrap",
        transition:
          "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "&.loading": {
          opacity: 0.5,
          pointerEvents: "none",
          transform: "scale(.9)",
        },
        "&::before": {
          display: "none",
        },
      },
      sizeLarge: {
        fontFamily: $Nunito,
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: 16,
        lineHeight: "16px",
        textAlign: "center",
        letterSpacing: 0.03,
        height: 48,
      },
      sizeSmall: {
        height: "auto",
      },
      text: {
        boxShadow: "none",
      },
      textSizeLarge: {
        fontSize: 16,
        fontFamily: $Nunito,
        lineHeight: "16px",
        fontWeight: 800,
        height: 48,
        color: "#3360AD",
      },
      outlinedPrimary: {
        backgroundColor: "transparent!important",
        "&:hover": {
          borderColor: "#208C72",
          color: "#208C72",
        },
        "&:active": {
          borderColor: "#1E3966",
          color: "#1E3966",
        },
      },
      containedPrimary: {
        backgroundColor: "#3360AD",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#208C72",
        },
        "&:active": {
          backgroundColor: "#1E3966",
        },
      },
      outlined: {
        borderColor: "#3360AD",
        backgroundColor: "transparent",
        color: "#3360AD",
        boxShadow: "none",
      },
    },
    MuiTextField: {
      root: {
        fontFamily: '"Nunito", sans-serif',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        "& legend": {
          fontSize: "inherit",
        },
      },
    },
    MuiInputBase: {
      root: {
        fontFamily: '"Nunito", sans-serif',
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.01em",
        color: "#2D3543",
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px white inset !important",
        },
        "&.Mui-error .MuiSelect-icon": {
          color: "#EA1763",
        },
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: $Nunito,
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.01em",
        color: "#5A6372",
        "&$focused": {
          textTransform: "uppercase",
          color: "#687387",
        },
        "&.Mui-error svg": {
          color: "#EA1763!important",
        },
      },
    },
    MuiInputLabel: {
      root: {
        "&$disabled": {
          color: "#CED4DF",
        },
      },
      animated: {
        whiteSpace: "nowrap",
      },
      shrink: {
        textTransform: "uppercase",
        color: "#687387",
        transform: "translate(0, 8.0px) scale(0.75)",
        "&:not(.Mui-focused)&+.MuiInputBase-root::before": {
          borderColor: "#97A2B4",
          transition: "none",
        },
      },
      formControl: {
        top: -5,
        right: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingRight: 22,
      },
    },
    MuiInput: {
      underline: {
        "&::before": {
          borderBottom: "2px solid #CED4DF",
        },
        "&:hover&::before": {
          borderColor: "#208C72",
        },
        "&$disabled::before": {
          borderBottom: "2px solid #CED4DF!important",
          opacity: 0.5,
        },
      },
    },
    MuiAutocomplete: {
      root: {
        "& .MuiFormLabel-root": {
          cursor: "pointer",
          zIndex: 1,
        },
      },
      popupIndicator: {
        color: "#3360AD",
      },
    },
    MuiSelect: {
      root: {
        padding: "3px 0 4px",
      },
      icon: {
        color: "#3360AD",
      },
      select: {
        "&:focus": {
          backgroundColor: "initial",
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: -4,
        alignItems: "flex-start",
        "& .MuiCheckbox-root": {
          marginTop: -4,
        },
      },
      label: {
        fontFamily: "inherit",
      },
    },
    MuiCheckbox: {
      root: {
        padding: "4px 6px 4px 4px",
        color: "#3360AD",
        "&:hover": {
          color: "#208C72",
        },
        "& .MuiSvgIcon-root": {
          width: "16px",
          height: "16px",
        },
      },
      colorPrimary: {
        "&$disabled": {
          color: "#CED4DF",
        },
      },
    },
    MuiStepper: {
      root: {
        padding: 0,
      },
    },
    MuiStep: {
      root: {
        "&$disabled": {
          opacity: 0.2,
        },
      },
      completed: {
        "& .MuiStepLabel-iconContainer": {
          borderColor: "#208C72",
          background: `#208C72 url(${checkIcon}) no-repeat center`,
          "&::before, & svg": {
            display: "none",
          },
        },
      },
    },
    MuiStepConnector: {
      root: {
        minWidth: 72,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#E9ECF1",
      },
      active: {
        background: "linear-gradient(-90deg, #3360AD 0%, #208C72 100%)",
      },
      completed: { background: "#208C72" },
      lineHorizontal: {
        height: 4,
        border: "none!important",
        width: "0%",
        borderRadius: 2,
        backgroundColor: "#3360AD",
      },
    },
    MuiStepLabel: {
      root: {
        "&$disabled .MuiStepLabel-iconContainer": {
          borderColor: "#5A6372",
          color: "#5A6372",
          "&::before": {
            opacity: 0,
          },
        },
      },
      iconContainer: {
        width: 32,
        height: 32,
        padding: 0,
        paddingRight: 0,
        marginRight: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        border: "1px solid #3360AD",
        position: "relative",
        color: "#fff",
        "& svg": {
          zIndex: 1,
        },
        "&::before": {
          content: "''",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#3360AD",
          borderRadius: "50%",
          border: "2px solid #fff",
          zIndex: 0,
        },
      },
      label: {
        fontWeight: "800!important",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.03em",
        color: "#2D3543",
        whiteSpace: "nowrap",
        fontFamily: "inherit",
      },
    },
    MuiStepButton: {
      horizontal: {
        padding: "12px 16px",
      },
    },
    MuiFormHelperText: {
      root: {
        "&.Mui-error": {
          width: 16,
          height: 16,
          position: "absolute",
          top: 22,
          left: -24,
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiBreadcrumbs: {
      root: {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "20px",
        letterSpacing: "0.01em",
        color: "#7E8AA0",
      },
      separator: {
        color: "#3360AD",
      },
    },
    MuiPaper: {
      root: {
        "&.MuiMenu-paper": {
          boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.19)",
        },
      },
      rounded: {
        borderRadius: 8,
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: "48px!important",
      },
    },
    MuiDrawer: {
      docked: {
        "& .MuiPaper-root": {
          boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.18);",
        },
      },
      modal: {
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(45, 53, 67, 0.5)",
        },
      },
      paper: {
        boxShadow: "-8px 0px 24px rgba(0, 0, 0, 0.12)",
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#CED4DF",
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "#F8F8FA",
        borderRadius: 8,
      },
      deletable: {
        "&:focus": {
          backgroundColor: "#F8F8FA",
        },
        "& .icon-close": {
          color: "#3360AD",
          "& svg": {
            width: 16,
            height: 16,
          },
        },
      },
    },
    MuiRating: {
      root: {
        color: "#3360AD",
        fontSize: 22,
      },
      sizeSmall: {
        fontSize: 16,
      },
      iconEmpty: {
        color: "#3360AD",
      },
    },
    MuiBackdrop: {
      root: {
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.5)!important",
      },
    },
    MuiCard: {
      root: {
        background: "#FFFFFF",
        boxShadow: "0px 0px 8px rgba(45, 53, 67, 0.12)",
        borderRadius: "0px 8px 8px 0px",
        position: "relative",
        "&::before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 4,
          background: "#CED4DF",
          borderRadius: "0px 8px 8px 0px",
        },
      },
    },
    MuiSwitch: {
      root: {
        "&:hover": {
          "& .MuiSwitch-thumb": {
            backgroundColor: "#618AD0",
          },
          "& .MuiSwitch-track": {
            border: "2px solid #618AD0",
          },
        },
      },
      switchBase: {
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&.Mui-checked": {
          transform: "translateX(8px)!important",
          "& + .MuiSwitch-track": {
            backgroundColor: "#3360AD!important",
            opacity: 1,
            borderColor: "#3360AD!important",
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: "#fff!important",
            opacity: 1,
          },
        },
      },
      sizeSmall: {
        width: 22,
        height: 14,
        padding: 0,
        "& .MuiSwitch-thumb": {
          width: 6,
          height: 6,
        },
      },
      thumb: {
        width: 6,
        height: 6,
        backgroundColor: "#97A2B4",
        boxShadow: "none",
        opacity: 1,
      },
      track: {
        backgroundColor: "#fff",
        border: "2px solid #97A2B4",
        opacity: 1,
      },
    },
  },
});

export default theme;
