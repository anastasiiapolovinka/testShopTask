import { AppBar, Container, Toolbar } from "@mui/material"
import { useEffect, useState } from "react";

const Header = () => {
   return (
      <AppBar position="static" sx={{background: '#FFCC26', border: '1px, solid'}}>
         <Container>
            <Toolbar disableGutters={true} sx={{width: '100%', justifyContent: 'end', color: '#414141', fontWeight: '600', fontSize: '32px'}}>
                  PRODUCT LIST PAGE
            </Toolbar>
         </Container>
      </AppBar>
   )
};
export default Header;