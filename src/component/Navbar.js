// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   makeStyles,
//   useTheme,
//   useMediaQuery,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import DrawerComponent from "./Drawer";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(5),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

// function Navbar() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <AppBar position="static">
//       <CssBaseline />
//       <Toolbar>
//         <Typography variant="h4" className={classes.logo}>
//           Navbar
          
//         </Typography>
//         {isMobile ? (
//           <DrawerComponent />
//         ) : (
//           <div className={classes.navlinks}>
//             <Link to="/" className={classes.link}>
//               Home
//             </Link>
//             <Link to="/about" className={classes.link}>
//               About
//             </Link>
//             <Link to="/contact" className={classes.link}>
//               Contact
//             </Link>
//             <Link to="/faq" className={classes.link}>
//               FAQ
//             </Link>
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }
// export default Navbar;

import React, {useState, useEffect} from 'react'
import {Box,AppBar, Toolbar, Stack,IconButton,Drawer,useMediaQuery,useTheme,Divider,Grid,Typography} from '@mui/material'

import { Link } from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {navItems} from '../utils/resuablesJS'
import {mobileNavItems} from '../utils/resuablesJS'

import chapLogoRev from  '../assets/images/chapLogoRev.png'

const Navbar = (props) => {
 const { windows } = props;
const [mobileOpen, setMobileOpen] = useState(false)
const [click , setClick] = useState(0)



const theme = useTheme();
// const isSmallSize =  useMediaQuery(theme.breakpoints.only("sm"));


const [windowDimension, detectWidth] = useState({
  winWidth: window.innerWidth
})
  const dectectSize = () =>{
    detectWidth({
       winWidth: window.innerWidth
    })
  }


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMoblieClick = (e) => {
    e.preventDefault()
      setClick(click+1)
     }

  useEffect(() => {
        document.getElementById('Home').scrollIntoView({ behavior: "smooth", block: "start" });
    }, [])

      useEffect(()=>{
      
        // if(windowDimension.winWidth  > isSmallSize)setMobileOpen(false)
    
          window.addEventListener('resize', dectectSize)
      
          return () => {
              window.removeEventListener('resize', dectectSize)

          }
      },[windowDimension])


  // useEffect(()=>{

  //   if(!isSmallSize){
  //     setMobileOpen(false)
  //   }
  // },[click])

  const container = windows !== undefined ? () => window().document.body : undefined;

//exta later mabye have the logo spin

  return (
      <>
    
    <AppBar component="nav"
    style={{
      background:"#74060b"
    }}
    >
    <Toolbar
      //  disableGutters={isSmallSize ? true : false} 
    >
        <Stack
        direction='row'
        justifyContent='space-between'
        width='100%'
        alignItems='center'
        >
      <Stack direction='row' alignItems='center' justifyContent='space-between'
        width='100%' 
        sx={{ display: { sm: "none" } }}
        color='#f2ebd7'
      >
   
  
      <Link to='Home' activeClass="active"  spy={true} smooth={true} offset={0} duration={500}
        style={{cursor:'pointer'}}
      >
           <img src={chapLogoRev} alt='Logo' style={{width: '40px', height: '40px', border: '2px solid #f2ebd7', borderRadius: '50%',
            margin: '0px 20px'}} />
            </Link>

            <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2}}
      >
        <MenuIcon 
        // classes={'menu-icon'} 
        />
      </IconButton>
      </Stack>

        <Box
        component="div"
        sx={{  display: { xs: "none", sm: "block" }}}
        >
       {/* <Link to='/'> */}
           <img src={chapLogoRev} alt='Logo' style={{width: '80px', height: '80px', border: '2px solid #f2ebd7', borderRadius: '50%',
            margin: '0px 20px'}} />
            {/* </Link> */}

        </Box>
      <Box 
  
      sx={{ display: { xs: "none", sm: "flex" }, 
      width:{
        // lg: '70%',
        // md:'60%',
        sm: '80%',
      },
      fontSize: {
        // lg: '70%',
        md:'16px',
        sm: '13.5px',
      },
      justifyContent: 'space-between',
      p:'5px 10px 5px 0',
       }}>
 {navItems.map((item )=> (
               <a key={item} href={`#${item}`}
                className="nav-link" 
               >{item}</a>
           ))}
  
      </Box>
      </Stack>
    </Toolbar>
  </AppBar>
     <Box component="nav">
     <Drawer
       container={container}
       variant="temporary"
       anchor="top"
       
       open={mobileOpen}
       onClose={handleDrawerToggle}
       ModalProps={{
         keepMounted: true // Better open performance on mobile.
       }}
       sx={{
         display: { xs: "block", sm: "none" },
         "& .MuiDrawer-paper": {
           boxSizing: "border-box",
           width: "100%"
         }
       }}
     >

<Box 
    sx={{ textAlign: 'center' }}
    style={{
      background:"#f2ebd7",
      position: 'relative',
    }}>
      <IconButton
      onClick={handleDrawerToggle} 
       style={{
        color: '#74060b',
        position: 'absolute',
        top: '2.5%',
        right: '2.5%',
      }}
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" sx={{ my: 2, color: '#74060b' }}>
        SPRINGFEILD ALUMNI
      </Typography>
      <Divider />
       <Grid container
           flexDirection='column'
        >
          

    {mobileNavItems.map((item) => (
      <Grid flexitem
      key={item}
        p= '10px '
      >
 <Link activeClass="active" to={item} spy={true} smooth={true} offset={50} duration={500} className = 'mobileNav-link'
 onClick={handleMoblieClick}
 >
         {item}
        </Link>

      </Grid>
        ))} 
        </Grid>
    </Box>
     </Drawer>
   </Box>
   </>

  )
}

export default Navbar