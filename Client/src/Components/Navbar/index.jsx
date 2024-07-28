import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/Logo.png";
import fetchData from "../../Utils/FetchData";
import SearchCart from "./SearchCart";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../Store/Slices/Auth";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Navbar({ change, check }) {
  const [searchBox, setSearchBox] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInp, setSearchInp] = useState();
  const [result, setResult] = useState();
  const {token}=useSelector(state=>state.auth)
  const dispatch =useDispatch()
  const list=useSelector(state=>state.cart.list)?.length

  useEffect(() => {
    if (searchInp) {
      (async () => {
        const res = await fetchData(
          `products?populate=*&filters[name][$containsi]=${searchInp}&pagination[pageSize]=4&pagination[page]=1`
        );
        setResult(res.data);
      })();
    }
  }, [searchInp]);

  window.addEventListener("click", (e) => {
    if (!e.target.closest(".searchbox")) {
      setSearchBox(false);
    }
    if (!e.target.closest(".search-inp")) {
      setSearchInp("");
    }
  });

  const resultItems = result?.map((e, index) => (
    <SearchCart
      key={index}
      id={e?.id}
      title={e?.attributes?.name}
      image={
        import.meta.env.VITE_BASE_URL +
        e?.attributes?.image?.data[0]?.attributes?.url
      }
    />
  ));

  const location=useLocation()
  if (location.pathname=='/auth') {
    return null
  }
  return (
    <>
      <Stack
        py={"20px"}
        bgcolor={"Secondary.main"}
        boxShadow={3}
        direction={"row"}
        justifyContent={"space-between"}
        gap={"10px"}
        alignItems={"center"}
        sx={{
          height: "13vh",
          px: "20px",
          position: "fixed",
          left: "0",
          top: "0",
          right: "0",
          zIndex: "90000",
        }}
      >
        <Stack
          className="searchbox"
          justifyContent={"center"}
          alignItems={"center"}
          direction={"row"}
        >
          {/* small menu start */}
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            onClick={() => setIsOpen(true)}
            sx={{
              fontSize: "2rem",
              color: "text.main",
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* small menu end */}
        
        {/* drawer menu start */}
          <Drawer
            sx={{ zIndex: "100000" }}
            anchor="left"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Box p={2} width={"250px"} role="presentation">
              <Stack flexDirection={"column"} gap={"20px"} direction={"column"}>
                <Typography component="div" variant="h4" fontWeight={"bold"}>
                  Nima Shop
                </Typography>
                <Button variant="text">
                  <Link to={"/"}>Home</Link>
                </Button>
                <Button variant="text">
                  <Link to={"/categories"}>Categories</Link>
                </Button>
                <Button variant="text">
                  <Link to={"/products/all-product/all-category"}>
                    Products
                  </Link>
                </Button>
                <Button variant="text">
                  <Link to={"/blogs"}>Blogs</Link>
                </Button>
              </Stack>
            </Box>
          </Drawer>
          {/* drawer menu end */}

          {/* Auth icon start */}
          <Link to={"/auth"}>
            {/* <IconButton sx={{ fontSize: "2rem", color: "text.main" }}> */}
            <Stack width={'50px'} height={'30px'} alignItems={'center'} justifyContent={'center'}>
              {!token?
              <PersonIcon sx={{color:'text.main'}} />
              :
                <Button onClick={()=>dispatch(logout())}>
              <LogoutIcon  sx={{color:'text.main'}}/>
                </Button>}
              </Stack>
          </Link>
          {/* Auth icon end */}

          {/* Cart icon start */}
          <Link to={'/cart'}>
          <IconButton sx={{ fontSize: "2rem", color: "text.main" }}>
          <Badge badgeContent={list} color="primary">
        <ShoppingCartIcon color="text.main" />
      </Badge>
          </IconButton>
          </Link>
          {/* Cart icon end */}

          {/* search icon start */}
          <IconButton
            onClick={() => setSearchBox(true)}
            sx={{ fontSize: "2rem", color: "text.main" }}
          >
            <SearchIcon />
          </IconButton>
          {/* search icon end */}

          {/* dark mode swich start */}
          <Stack mx={'20px'} direction={'row'} width={'100px'} height={'50px'} alignItems={'center'} justifyContent={'center'} gap={'5px'}>
          <LightModeIcon/>
          <Switch
            defaultChecked
            color="red"
            onChange={change}
            checked={check}
            />
            <DarkModeIcon/>
            </Stack>
         {/* dark mode swich end */}

        </Stack>

        {/* page links start */}
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          direction={"row"}
          sx={{
            display: {
              sm: "none",
              md: "flex",
              xs: "none",
            },
          }}
        >
          {/* Links in navbart */}
          <Button variant="text" sx={{ color: "text.main" }}>
            <Link to={"/"}>Home</Link>
          </Button>
          <Button variant="text" sx={{ color: "text.main" }}>
            <Link to={"/categories"}>Categories</Link>
          </Button>
          <Button variant="text" sx={{ color: "text.main" }}>
            <Link to={"/products/all-product/all-category"}>Products</Link>
          </Button>
          <Button variant="text" sx={{ color: "text.main" }}>
            <Link to={"/blogs"}>Blogs</Link>
          </Button>
        </Stack>
        {/* page links end */}

        {/* Logo image start*/}
        <Link to={"/"}>
          <Box component={"img"} width={"60px"} src={logo} alt="logo" />
        </Link>
        {/* Logo image end*/}
      </Stack>

      {/* search input start */}
      <Stack
        className="searchbox"
        position={"fixed"}
        sx={{
          left: "0",
          top: "13vh",
          right: "0",
          width: "100%",
          transition: "all .5s ease",
          height: searchBox ? "55vh" : "0",
          bgcolor: "Secondary.secend",
          boxShadow: "1",
          zIndex: "900000",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <TextField
          value={searchInp}
          onChange={(e) => setSearchInp(e.target.value)}
          label="Search"
          variant="standard"
          sx={{
            opacity: searchBox ? "1" : "0",
            width: "90%",
            zIndex: "900000",
          }}
        />
        <Box
          sx={{
            opacity: searchInp ? "1" : "0",
            width: "95%",
            minHeight: searchInp ? "40vh" : "0",
            bgcolor: "Secondary.secend",
            transition: "all .5s ease",
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexWrap:'wrap'
          }}
        >
          {resultItems}
        </Box>
        <Stack sx={{opacity: searchBox ? "1" : "0"}} width={'100%'} height={'50px'} bgcolor={'Secondary.secend'} direction={'row'} justifyContent={'center'} alignItems={'center'} flexWrap={'nowrap'} gap={'10px'}>
            <Link to={`/search/${searchInp}`}><Typography sx={{color:'text.main',"&:hover": { m: "10px" },transition:'all 0.5s'}}
            >See more products</Typography></Link>
            <ArrowForwardIosIcon sx={{color:'text.main'}}/>
        </Stack>
      </Stack>
      {/* search input end */}
    </>
  );
}
