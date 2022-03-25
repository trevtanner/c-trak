import {
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
  Divider,
} from "@mui/material";

export default function cardGenerator(props) {
  return props.map((entry) => (
    <Grid item xs={12} sm={4} nowrap>
      <Card elevation={6}
        sx={{
          margin: "auto",
          textAlign: "center",
          minHeight: '100px',
          maxHeight: '250px'
        }}
      >
        <CardContent
          sx={{
            margin: "auto",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "16pt" }}>
            <Link underline="hover" color="inherit" href={entry.url}>
              {entry.name}
            </Link>
          </Typography>
          <Typography
            variant={"caption"}
            color="text.secondary"
            component="div"
          >
            {" "}
          </Typography>
          <Divider light />
          <Typography
            variant="body1"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {entry.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
}
