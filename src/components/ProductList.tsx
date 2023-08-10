import { Box, Card, CardMedia, Typography, Button } from "@mui/material"
import { FixedSizeList as List } from "react-window";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect } from "react";
import { useGlobalState } from "../state";
import { Link } from "react-router-dom";
import InfiniteLoader from 'react-virtualized-auto-sizer';

const Row = ({ index }: { index: number }) => {
   const [productList] = useGlobalState('products');
   const [favorites, setFavorites] = useGlobalState('favorites');
   const { id = 0, name, src, price } = productList[index];
   const isFavorite = favorites.includes(id);
   const handleAddToFavorite = (itemId: number) => {
      const isFavorite = favorites.includes(itemId)
      setFavorites(isFavorite ? favorites.filter((id) => id !== itemId) : [...favorites, itemId]);
   }
   return (
      <Box key={id} sx={{float: 'left', maxWidth: '262px', border: '1px dashed #414141', borderRadius: '30px', padding: '15px', mb: '70px', mr: '30px', height: '350px'}}>
         <Card sx={{boxShadow: 'none'}}>
            <CardMedia
               component="img"
               image={`https://testbackend.nc-one.com${src}`}
               alt={name}
            />
            <Link to={`/product/${id}`}>
               <Typography >{name}</Typography>
            </Link>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
               <Typography >{`$${price}`}</Typography>
               <Button sx={{width: '36px', height: '36px', minWidth: '36px', background: '#FFCC26', borderRadius: '6px'}} onClick={() => handleAddToFavorite(id)}>
                  <FavoriteIcon sx={{fontSize: '26px', color: isFavorite ? '#414141' : '#FBFBFB'}}/>
               </Button>
            </Box>
         </Card>
      </Box>
   )
};
 

const ProductList = () => {
   const [productList, setProductList] = useGlobalState('products');
   useEffect(() => {
      (async () => {
         const response = await fetch('https://testbackend.nc-one.com/image');
         const data = await response.json();
         setProductList(data);
      })()
   }, [setProductList]);
   return (
      <Box sx={{width: '100%', maxWidth: '1138px', paddingLeft: '176px'}}>
         <InfiniteLoader>
         {({ width }: { width: number }) => {
               return (
                  <List
                     width={width}
                     height={900}
                     itemCount={productList.length}
                     itemSize={350}
                  >
                     {Row}
                  </List>
               );
         }}
         </InfiniteLoader>
      </Box>
   )
}
export default ProductList;