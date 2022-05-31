import React from 'react'
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/Card"

const ProductCard = ({ name, description,price }: any) => {
  return (
    <Card key={name._id}>
      <CardActionArea  style={{ padding: 30 }}>
        <Typography variant="h4" component="h2" >{name}</Typography>
        <Typography variant="body2" component="p" >{description}</Typography>
        <Typography variant="body2" component="p" >{price}</Typography>
      </CardActionArea>

    </Card>
  )
}

export default ProductCard