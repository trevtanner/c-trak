import { Fragment } from "react";
import FadeIn from "react-fade-in";
import classes from "./Resources.module.css";
import {
  Typography,
  Container,
  Grid,
} from "@mui/material";

import CardGenerator from "../UI/CardGenerator";
import { Divider } from "semantic-ui-react";

const Resources = () => {
  const exchanges = [
    {
      name: "Binance.US",
      url: "https://www.binance.us",
      description:
        "Buy, sell, and trade cryptocurrencies from your laptop, tablet, or mobile device.",
    },
    {
      name: "Gemini",
      url: "https://www.gemini.com",
      description: "A simple, secure way to buy and sell cryptocurrency.",
    },
    {
      name: "Crypto.com",
      url: "https://www.crypto.com",
      description: "The World's Fastest Growing Crypto App.",
    },
  ];
  const prices = [
    {
      name: "CoinGecko",
      url: "https://www.coingecko.com",
      description:
        "CoinGecko provides a fundamental analysis of the crypto market.",
    },
    {
      name: "Coin Market Cap",
      url: "https://www.coinmarketcap.com",
      description:
        "CoinMarketCap is the world's most-referenced price-tracking website for cryptoassets in the rapidly growing cryptocurrency space.",
    },
    {
      name: "CoinStats",
      url: "https://www.coinstats.com",
      description:
        "All-In-One Platform For Managing All Your Crypto and DeFi Assets.",
    },
  ];
  const social = [
    {
      name: "Lunar Crush",
      url: "https://www.lunarcrush.com",
      description:
        "LunarCrush collects activity across social media for bitcoin, thousands of alts and exchanges, as well as what influencers are posting, and distills it into bitesize, digestible chunks.",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      description:
        "Twitter is an open service that’s home to a world of diverse people, perspectives, ideas, and information.",
    },
    {
      name: "r/Cryptocurrency",
      url: "https://www.reddit.com/r/cryptocurrency",
      description:
        "The leading community for cryptocurrency news, discussion, and analysis.",
    },
  ];

  const exchangeInfo = CardGenerator(exchanges);
  const pricesInfo = CardGenerator(prices);
  const socialInfo = CardGenerator(social);

  return (
    <FadeIn>
      <Container sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Grid container spacing={2} className={classes.exchanges}>
          <Grid item xs={12}>
            <h1>Exchanges</h1>
            <Grid container spacing={2}>
              {exchangeInfo}
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.exchanges}>
            <h1>Price Information</h1>
            <Grid container spacing={2}>
              {pricesInfo}
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.exchanges}>
            <h1>Social</h1>
            <Grid container spacing={2}>
              {socialInfo}
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Information pulled directly from each website.
        </Typography>
      </Container>
    </FadeIn>
  );
};

export default Resources;
