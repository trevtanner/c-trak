import { Fragment } from "react"
import { Container, Card } from "semantic-ui-react";
import FadeIn from "react-fade-in";
import  classes  from './Resources.module.css'

const Resources = () => {
    return (
        <Container className="pt-4 pb-4">
            <FadeIn>
            <div className={classes.exchanges}>
            <h1>Exchanges</h1>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Card.Content>
              <Card.Header className={classes.heading}>Binance</Card.Header>
              <Card.Meta>Place url here</Card.Meta>
              <Card.Description>Basic description of site</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Gemini</Card.Header>
              <Card.Meta>Place url here</Card.Meta>
              <Card.Description>Basic description of site</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Crypto.com</Card.Header>
              <Card.Meta>Place url here</Card.Meta>
              <Card.Description>Basic description of site</Card.Description>
            </Card.Content>
          </Card>
          </Card.Group>
            </div>
            <div className={classes.exchanges}>
            <h1>Price Information</h1>
            <Card.Group itemsPerRow={3}>
          <Card>
            <Card.Content>
              <Card.Header>CoinGecko</Card.Header>
              <Card.Meta>Place url here</Card.Meta>
              <Card.Description>Basic description of site</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>CoinMarketCap</Card.Header>
              <Card.Meta>Place url here</Card.Meta>
              <Card.Description>Basic description of site</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>CoinStats</Card.Header>
              <Card.Meta>Place url here</Card.Meta>
              <Card.Description>Basic description of site</Card.Description>
            </Card.Content>
          </Card>
          </Card.Group>
            </div>
            <div className={classes.exchanges}>
            <h1>Social</h1>
            <Card.Group itemsPerRow={3}>
          <Card>
            <Card.Content>
              <Card.Header>LunarCrush</Card.Header>
              <Card.Meta>Place url here</Card.Meta>
              <Card.Description>Basic description of site</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Twitter</Card.Header>
              <Card.Meta>Place url here</Card.Meta>
              <Card.Description>Basic description of site</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Cryptocurrency Subreddit</Card.Header>
              <Card.Meta>Place url here</Card.Meta>
              <Card.Description>Basic description of site</Card.Description>
            </Card.Content>
          </Card>
          </Card.Group>
            </div>
            </FadeIn>
        </Container>
    )
}

export default Resources;