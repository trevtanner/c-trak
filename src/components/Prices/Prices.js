import { useState, useEffect } from "react";
import {
  Alert,
  CircularProgress,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Container
} from "@mui/material";
import FadeIn from "react-fade-in";
import { Divider } from "semantic-ui-react";

const key = process.env.REACT_APP_NOMICS_API_KEY;

function Prices() {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinId, setCoinId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nomics.com/v1/currencies/ticker?key=${key}&per-page=50&page=1`
        );
        const data = await response.json();
        setCoins(data);
      } catch (e) {
        setError(e.message || "Something went wrong");
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  const coinsList = coins.map((coin) => (
    <Grid item xs={6} sm={4} md={3} lg={2}>
    <Card sx={{height: 'auto'}}>
    <CardHeader
    title={coin.name}
    />
      <CardMedia
        component="img"
        height="200"
        src={coin.logo_url}
        alt={coin.name}
      />
      <CardContent>
        <Typography variant="body2">{coin.symbol}</Typography>
        <Typography variant="body2">Rank: {coin.rank}</Typography>
        <Typography variant="body1">
          Price: ${Number(coin.price).toFixed(4)}
        </Typography>
        <Typography variant="body1">
          Market Cap: ${Math.abs(Number(coin.market_cap) / 1.0e9).toFixed(2)}B
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  ));

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (loading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  }

   return (
    <Container sx={{mt: '1em', mb: '1em'}}>
      <FadeIn>
        <Grid container spacing={2}>{coinsList}</Grid>
        <Divider />
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Arranged by Market Cap
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Data pulled using <a href="https://nomics.com/">Nomics.com</a> API
        </Typography>
        {/* https://nomics.com/ */}
      </FadeIn>
    </Container>
  );
};

export default Prices;
