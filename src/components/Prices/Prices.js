import { useState, useEffect } from "react";
import { Alert, CircularProgress, Grid } from "@mui/material";
import FadeIn from "react-fade-in";
import { Container, Card } from "semantic-ui-react";
import { computeHeadingLevel } from "@testing-library/react";

const Prices = () => {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinId, setCoinId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.binance.com/api/v3/avgPrice'
        );
        const data = await response.json();
        setCoins(data.results);
      } catch (e) {
        setError(e.message || "Something went wrong");
      }

      setLoading(false);
    };
    fetchData();
    console.log(coins);
  }, []);

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

  // const coinsList = coins.map((coin) => (
  //   <Card>
  //   <Card.Content>
  //     <Card.Header>{coin.name}</Card.Header>
  //     <Card.Meta>BTC</Card.Meta>
  //     <Card.Description>$ Current Price</Card.Description>
  //   </Card.Content>
  // </Card>
  // ))

  return (
    <Container className="pt-4 pb-4">
      <FadeIn>
        <Card.Group itemsPerRow={2}>
          <Card>
            <Card.Content>
              <Card.Header>Bitcoin</Card.Header>
              <Card.Meta>BTC</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Ether</Card.Header>
              <Card.Meta>ETH</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Cardano</Card.Header>
              <Card.Meta>ADA</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Binance Smart Chain</Card.Header>
              <Card.Meta>BSC</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Cardano</Card.Header>
              <Card.Meta>ADA</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Binance Smart Chain</Card.Header>
              <Card.Meta>BSC</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Cardano</Card.Header>
              <Card.Meta>ADA</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Binance Smart Chain</Card.Header>
              <Card.Meta>BSC</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Cardano</Card.Header>
              <Card.Meta>ADA</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Binance Smart Chain</Card.Header>
              <Card.Meta>BSC</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Cardano</Card.Header>
              <Card.Meta>ADA</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Binance Smart Chain</Card.Header>
              <Card.Meta>BSC</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Cardano</Card.Header>
              <Card.Meta>ADA</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Binance Smart Chain</Card.Header>
              <Card.Meta>BSC</Card.Meta>
              <Card.Description>$ Current Price</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </FadeIn>
    </Container>
  );
};

export default Prices;
