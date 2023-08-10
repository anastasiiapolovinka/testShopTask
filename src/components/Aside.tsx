import { Box, Button, Card, CardMedia, List, ListItem, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalState } from "../state";

const Aside = () => {
   const [productList] = useGlobalState('products');
   const [favorites, setFavorites] = useGlobalState('favorites');
   const handleAddToFavorite = (itemId: number) => {
      setFavorites([...favorites, itemId]);
      const isFavorite = favorites.includes(itemId)
      setFavorites(isFavorite ? favorites.filter((id) => id !== itemId) : [...favorites, itemId]);
   }
   return (
      <Box sx={{padding: '45px 30px', minWidth: '410px', border: '2px dashed #414141', borderRadius: '30px'}}>
         <Typography sx={{fontFamily: 'Anek Telugu', fontSize: '24px', fontWeight: '600'}}>FAVORITES</Typography>
            <List>
               {favorites.map((itemId) => {
                  const { src, name, price, id = 0 } = productList.find(({ id }) => id === itemId) || {};
                  return (
                     <ListItem key={id} sx={{maxWidth: '347px', background: '#FBFBFB', borderRadius: '30px'}}>
                        <Card sx={{boxShadow: 'none', background: 'none', display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                           <CardMedia
                              component="img"
                              image={`https://testbackend.nc-one.com${src}`}
                              alt={name}
                              sx={{maxWidth: '108px'}}
                           />
                           <Box sx={{maxWidth: '184px', mt: '12px'}}>
                              <Typography >{name}</Typography>
                              <Box sx={{display: 'flex', flexDirection: 'row', width: '184px', justifyContent: 'space-between'}}>
                                 <Typography >{`$${price}`}</Typography>
                                 <Button sx={{width: '36px', height: '36px', minWidth: '36px', background: '#FFCC26', borderRadius: '6px'}} onClick={() => handleAddToFavorite(id)}>
                                    <FavoriteIcon sx={{fontSize: '26px', color: '#414141'}}/>
                                 </Button>
                              </Box>
                           </Box>
                        </Card>
                     </ListItem>
                  )
               })}
            </List>
      </Box>
   )
}
export default Aside;