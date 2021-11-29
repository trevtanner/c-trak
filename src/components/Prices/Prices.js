import { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import { Container, Card } from "semantic-ui-react";

const Prices = () => {
  const [data, setData] = useState([]);
  const [coinId, setCoinId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/ticker?key=${process.env.REACT_APP_API_KEY}&ids=BTC,ETH,ADA`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [data, coinId]);
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
