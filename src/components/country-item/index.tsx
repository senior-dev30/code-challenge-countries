import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CountryItem = ({ coutry }: any) => {
  return (
    <Link
      to={{ pathname: coutry.name.common }}
      state={coutry}
      style={{ textDecoration: "none" }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={coutry.flags.png}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {coutry.name.common}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {coutry.population}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Region: {coutry.region}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Capital: {coutry.capital}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
