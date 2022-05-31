import React from 'react'
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import { productTypes } from '../../globalTypes'

const ProductCard = ({ name, description, price, _id }: productTypes) => {

  return (
    <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }}
    >
      <Card key={name} elevation={5}>
        <CardActionArea style={{ padding: 30 }}>
          <CardMedia component="img" image="https://picsum.photos/200" title={name} />
          <CardHeader title={name} />
          <CardContent>
            <Typography variant="body1" component="p" >{description}</Typography>
            <Typography variant="body1" component="p" >{price}</Typography>
          </CardContent>
        </CardActionArea>

      </Card>
    </Link>

  )
}

export default ProductCard