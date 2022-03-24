import { Fragment } from "react";
import FadeIn from "react-fade-in";
import classes from "./Resources.module.css";
import {
  CardActions,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Divider,
} from "@mui/material";

const Resources = () => {
  const exchanges = [
    {
      name: "Binance.US",
      url: "https://www.binance.us",
      description: "CEX",
    },
    {
      name: "Gemini",
      url: "https://www.gemini.com",
      description: "CEX",
    },
    {
      name: "Crypto.com",
      url: "https://www.crypto.com",
      description: "CEX",
    },
  ];
  const prices = [
    {
      name: "CoinGecko",
      url: "https://www.coingecko.com",
      description: "Price info",
    },
    {
      name: "Coin Market Cap",
      url: "https://www.coinmarketcap.com",
      description: "Price Info",
    },
    {
      name: "CoinStats",
      url: "https://www.coinstats.com",
      description: "Price Info / Portfolio",
    },
  ];
  const social = [
    {
      name: "Lunar Crush",
      url: "https://www.lunarcrush.com",
      description: "Crypto social data",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      description: "Twitter",
    },
    {
      name: "r/Cryptocurrency",
      url: "https://www.reddit.com/r/cryptocurrency",
      description: "Crypto subreddit",
    },
  ];

  const exchangeInfo = exchanges.map((entry) => (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: "200px", maxHeight: "300px", margin: 'auto', textAlign: 'center'  }}>
        <CardContent
          sx={{
            margin: "auto",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "14pt" }}>{entry.name}</Typography>
          <Typography
            variant={"caption"}
            color="text.secondary"
            component="div"
          >
            {entry.url}
          </Typography>
          <Divider className={classes.divider} light />
          <Typography variant="body1">{entry.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ));

  const pricesInfo = prices.map((entry) => (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: "200px", maxHeight: "300px", margin: 'auto', textAlign: 'center'  }}>
        <CardContent
          sx={{
            margin: "auto",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "14pt" }}>{entry.name}</Typography>
          <Typography
            variant={"caption"}
            color="text.secondary"
            component="div"
          >
            {entry.url}
          </Typography>
          <Divider className={classes.divider} light />
          <Typography variant="body1">{entry.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ));

  const socialInfo = social.map((entry) => (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: "200px", maxHeight: "300px", margin: 'auto', textAlign: 'center'  }}>
        <CardContent
          sx={{
            margin: "auto",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "14pt" }}>{entry.name}</Typography>
          <Typography
            variant={"caption"}
            color="text.secondary"
            component="div"
          >
            {entry.url}
          </Typography>
          <Divider className={classes.divider} light />
          <Typography variant="body1">{entry.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <FadeIn>
      <Container>
        <Grid container spacing={2} className={classes.exchanges}>
          <Grid item xs={12}>
            <h1>Exchanges</h1>
            <Grid container>
              {exchangeInfo}
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.exchanges}>
            <h1>Price Information</h1>
            <Grid container>{pricesInfo}</Grid>
          </Grid>
          <Grid item xs={12} className={classes.exchanges}>
            <h1>Social</h1>
            <Grid container>{socialInfo}</Grid>
          </Grid>
        </Grid>
      </Container>
    </FadeIn>
  );
};

export default Resources;
