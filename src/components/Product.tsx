import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product as ProductItem, useGlobalState } from "./../state"


const Product = () => {
   const { productId } = useParams();
   const [product, setProduct] = useState<ProductItem>({});
   const [favorites, setFavorites] = useGlobalState('favorites');
   const { name, src, price, id = 0 } = product;
   useEffect(() => {
      (async () => {
         const response = await fetch(`https://testbackend.nc-one.com/image?id=${productId}`);
         const data = await response.json();
         setProduct(data);
      })()
   }, [setProduct, productId]);
   const isFavorite = favorites.includes(id)
   const handleAddToFavorite = (itemId: number) => {
      setFavorites([...favorites, itemId]);
      setFavorites(isFavorite ? favorites.filter((id) => id !== itemId) : [...favorites, itemId]);
   }
   return (
   <Card sx={{boxShadow: 'none', maxWidth: '1185px', width: '100%', display: 'flex',  justifyContent: 'space-between'}}>
      <CardMedia
         sx={{maxWidth: '445px'}}
         component="img"
         image={`https://testbackend.nc-one.com${src}`}
         alt={name}
      />
      <Box sx={{mt: '64px'}}>
         <Typography sx={{color: '#414141', fontFamily: 'Poppins', fontSize: '64px', minWidth: '600px', mb: '60px'}}>{name}</Typography>
         <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography sx={{color: '#414141', fontFamily: 'Poppins', fontSize: '64px', fontWeight: "500"}}>{`$${price}`}</Typography>
            <Button sx={{width: '98px', height: '98px', background: '#FFCC26', borderRadius: '10px'}} onClick={() => handleAddToFavorite(id)}>
               <FavoriteIcon sx={{fontSize: '80px', color: isFavorite ? '#414141' : '#FBFBFB'}}/>
            </Button>
         </Box>
      </Box>
   </Card>
   )
}
 
   export default Product;