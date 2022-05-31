import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { AppState } from '../../globalTypes';

const Products = () => {
  const products = useSelector((state: AppState) => state.products.list)
  return (
    <Container >
      <Grid container spacing={5} justify-content="space-between">
        {products.map((product: any) =>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <Paper>
              <ProductCard {...product} key={product._id} />
            </Paper>
          </Grid>

        )}
      </Grid>
    </Container>
  )
}

export default Products