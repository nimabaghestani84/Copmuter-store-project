import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/FetchData";
import {
  Box,
  Button,
  Drawer,
  FormControlLabel,
  Grid,
  IconButton,
  Slide,
  Slider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import ProductCard from "./ProductCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProductSkeleton from "./ProductSkeleton";
import TuneIcon from "@mui/icons-material/Tune";
import { motion } from "framer-motion";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("createdAt:desc");
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState([0, 500]);
  const [discountRate, setDiscountRate] = useState([0, 100]);
  const [discount, setDiscount] = useState(false);

  const { categoriesId } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `products?populate=*${
          categoriesId == "all-product"
            ? ""
            : `&filters[categories][id][$eq]=${categoriesId}`
        }&sort=${sort}&filters[price][$gte]=${price[0]}&filters[price][$lte]=${
          price[1]
        }&filters[discount][$gte]=${discountRate[0]}&filters[discount][$lte]=${
          discountRate[1]
        }&pagination[page]=1&pagination[pageSize]=200&${
          discount && "&filters[discount][$gt]=0"
        }`
      );
      setProducts(res.data);
    })();
  }, [categoriesId, sort, price, discount, discountRate]);

  const productIteams = products.map((e, index) => (
    <ProductCard
      key={index}
      id={e.id}
      title={e?.attributes?.name}
      image={
        import.meta.env.VITE_BASE_URL +
        e?.attributes?.image?.data[0]?.attributes?.url
      }
      price={e?.attributes?.price}
      discountPrice={e?.attributes?.price * (1 - e?.attributes?.discount / 100)}
      discount={e?.attributes?.discount}
    />
  ));

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handelPrice = (event, newValue) => {
    setPrice(newValue);
  };

  const handelDiscountRate = (event, newValue) => {
    setDiscountRate(newValue);
  };

  function valueText(value) {
    return `$${value}`;
  }
  return (
    <Stack
    component={motion.div}
    initial={{ width: 0 ,height:0}}
    animate={{ width: "100%",height:'100%' }}
    exit={{
      x: window.innerWidth,
      transition: {
        duration: 5,
        type: "spring",
        ease: "easeOut"
      },
    }}>
      {products ? (
        <Stack
          width={"100%"}
          height={"100%"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Stack
            direction={"row-reverse"}
            px={"20px"}
            sx={{
              border: 1,
              width: "90%",
              minHeight: "10vh",
              bgcolor: "Secondary.main",
              borderRadius: "20px",
              m: "auto",
              position: "fixed",
              top: "15vh",
              right: "0",
              left: "0",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: "2",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              aria-label="logo"
              onClick={() => setIsOpen(true)}
              sx={{
                fontSize: "2rem",
                color: "text.main",
              }}
            >
              <TuneIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <Box p={2} width={"250px"} role="presentation">
                <Stack
                  flexDirection={"column"}
                  direction={"column"}
                  alignItems={"start"}
                  justifyContent={"center"}
                  mt={"15vh"}
                >
                  <Typography component="div" variant="h5" fontWeight={"bold"}>
                    Filters
                  </Typography>
                  <Stack
                    width={"90%"}
                    height={"100px"}
                    alignItems={"start"}
                    justifyContent={"center"}
                    p={"10px"}
                    my={"50px"}
                  >
                    <Typography>Price:</Typography>
                    <Box sx={{ minWidth: 180 }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={price}
                        onChange={handelPrice}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueText}
                        min={0}
                        max={500}
                      />
                    </Box>

                    <Typography>Discount:</Typography>
                    <Box sx={{ minWidth: 180 }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={discountRate}
                        onChange={handelDiscountRate}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueText}
                        min={0}
                        max={100}
                      />
                    </Box>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={discount}
                          onChange={(e) => setDiscount(!discount)}
                        />
                      }
                      label="Discount"
                    />
                  </Stack>
                </Stack>
              </Box>
            </Drawer>

            {/* <Typography>Filter</Typography> */}
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: "120px" }}
              size="small"
            >
              <InputLabel id="demo-select-small-label">Sort</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={sort}
                label="Sort"
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={"createdAt:desc"}>Newst</MenuItem>
                <MenuItem value={"price:desc"}>Highest Price</MenuItem>
                <MenuItem value={"price:asc"}>Lowest Price</MenuItem>
                <MenuItem value={"discount:desc"}>Bigger Discount</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={"28vh"}
          >
            <Grid
              container
              sx={{
                width: "100%",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                sx={{ overflow: "hidden", width: "100%" }}
              >
                <Stack
                  width={"100%"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"20px"}
                >
                  <Stack
                    width={"100%"}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexWrap={"wrap"}
                  >
                    {productIteams}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      ) : (
        <Stack
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"13vh"}
          bgcolor={"red"}
          zIndex={"5"}
        >
          <ProductSkeleton />
        </Stack>
      )}
    </Stack>
  );
}
