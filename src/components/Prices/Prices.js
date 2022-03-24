import { useState, useEffect } from 'react'
import { Alert, CircularProgress, Grid, Typography } from '@mui/material'
import FadeIn from 'react-fade-in'
import { Container, Card, Divider } from 'semantic-ui-react'
import { computeHeadingLevel } from '@testing-library/react'
import { isBigNumberish } from '@ethersproject/bignumber/lib/bignumber'

const key = process.env.REACT_APP_NOMICS_API_KEY

const Prices = () => {
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [coinId, setCoinId] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nomics.com/v1/currencies/ticker?key=${key}&per-page=50&page=1`,
        )
        const data = await response.json()
        setCoins(data)
      } catch (e) {
        setError(e.message || 'Something went wrong')
      }

      setLoading(false)
    }
    fetchData()
  }, [])
  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  if (loading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    )
  }

  const coinsList = coins.map((coin) => (
    <Card>
      <Card.Content>
        <Card.Header>{coin.name}</Card.Header>
        <Card.Meta>{coin.symbol}</Card.Meta>
        <Card.Description>${Number(coin.price).toFixed(2)}</Card.Description>
      </Card.Content>
    </Card>
  ))

  return (
    <Container className="pt-4 pb-4">
      <FadeIn>
        <Card.Group itemsPerRow={2}>{coinsList}</Card.Group>
        <Divider />
        <Typography variant='body1' sx={{textAlign: 'center'}}>Data pulled using <a href='https://nomics.com/'>Nomics.com</a> API</Typography>
        {/* https://nomics.com/ */}
      </FadeIn>
    </Container>
  )
}

export default Prices
