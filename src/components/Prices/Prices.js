import { Container, Card } from "semantic-ui-react"

const Prices = () => {
    return (
        <Container className="pt-4 pb-4">
        <Card.Group itemsPerRow={2}>
        <Card>
          <Card.Content>
            <Card.Header>Bitcoin</Card.Header>
            <Card.Meta>BTC</Card.Meta>
            <Card.Description>
              $ Current Price
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Ether</Card.Header>
            <Card.Meta>ETH</Card.Meta>
            <Card.Description>
              $ Current Price
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Cardano</Card.Header>
            <Card.Meta>ADA</Card.Meta>
            <Card.Description>
              $ Current Price
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Binance Smart Chain</Card.Header>
            <Card.Meta>BSC</Card.Meta>
            <Card.Description>
              $ Current Price
            </Card.Description>
          </Card.Content>
        </Card>
        </Card.Group>
        </Container>
    )
}

export default Prices