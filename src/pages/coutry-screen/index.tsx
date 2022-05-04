import { Box, Button, Typography, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SubTitle } from "../../components/subtitle-title";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "0 20px",
  },
  containerBtn: {
    width: "15%",
    display: "flex",
    flexDirection: "column",
    margin: "30px 0",
  },
  containerMain: {
    display: "flex",
  },
  containerFlagImg: {
    width: "40%",
  },
  containerFlagInfo: {
    width: "40%",
    padding: "0 5em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  containerFlagDescription: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  containerFlagRegion: {},
  containerFlagLangees: {},
  borderName: {
    display: "inline-block",
    border: "1px solid lightgrey",
    boxShadow: "6px 10px 9px -7px lightgrey",
    minWidth: "60px",
    textAlign: "center",
  },
});

const CountryScreen = (props: any) => {
  const { state }: any = useLocation();
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box className={classes.root}>
        <Box className={classes.containerBtn}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              startIcon={<ArrowBackIcon />}
              size="small"
              sx={{ backgroundColor: "#fff", color: "#000" }}
            >
              Back
            </Button>
          </Link>
        </Box>
        <Box className={classes.containerMain}>
          <Box className={classes.containerFlagImg}>
            <CardMedia
              component="img"
              height="auto"
              image={state.flags.svg}
              alt="green iguana"
            />
          </Box>
          <Box className={classes.containerFlagInfo}>
            <Typography
              sx={{
                margin: "10px 0",
              }}
              variant="h4"
              component="div"
            >
              {state.name.common}
            </Typography>
            <Box className={classes.containerFlagDescription}>
              <Box className={classes.containerFlagRegion}>
                {state?.name.nativeName.official && (
                  <SubTitle
                    subTile="Native Name"
                    title={state?.name.nativeName.official}
                  ></SubTitle>
                )}
                <SubTitle
                  subTile="Population"
                  title={state?.population ? state?.population : ""}
                ></SubTitle>
                <SubTitle
                  subTile="Region"
                  title={state.region ? state.region : ""}
                ></SubTitle>
                <SubTitle
                  subTile="Sub Region"
                  title={state?.subregion ? state?.subregion : ""}
                ></SubTitle>
                <SubTitle
                  subTile="Capital"
                  title={state?.capital[0] ? state?.capital[0] : ""}
                ></SubTitle>
              </Box>
              <Box className={classes.containerFlagLangees}>
                <SubTitle
                  subTile="Top Level Domation"
                  title={state?.tld[0]}
                ></SubTitle>
                <SubTitle
                  subTile="Currencies"
                  title={Object.keys(state?.currencies)[0]}
                ></SubTitle>
                <SubTitle
                  subTile="Languages"
                  title={state?.languages.eng}
                ></SubTitle>
              </Box>
            </Box>
            <Box>
              <strong>Border Countries: </strong>
              {state?.borders.map((item: any, index: number) => (
                <Typography
                  sx={{ margin: "0 10px" }}
                  className={classes.borderName}
                  key={index}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CountryScreen;
