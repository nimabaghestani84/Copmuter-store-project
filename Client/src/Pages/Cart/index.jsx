import {
  Box,
  Button,
  IconButton,
  Stack,
  TableFooter,
  Typography,
} from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clear, removeItem } from "../../Store/Slices/Cart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import cartEmty from "../../../public/cartEmty.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Cart() {
  const { list } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let totalPrice = 0;
  // map on list of products
  const items = list?.map((e, index) => {
    totalPrice +=
      e?.attributes?.price * (1 - e?.attributes?.discount / 100) * e.quantity;
    return (
      <TableRow>
        <TableCell align="center">{index + 1}</TableCell>
        <TableCell align="center">{e?.attributes?.name}</TableCell>
        <TableCell align="center">
          <Box
            component={"img"}
            src={
              import.meta.env.VITE_BASE_URL +
              e.attributes.image.data[0].attributes.url
            }
            alt={e.attributes?.name}
            sx={{
              width: "80%",
              height: "80%",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
        </TableCell>
        <TableCell align="center">
          {" "}
          ${e?.attributes?.price * (1 - e?.attributes?.discount / 100)}
        </TableCell>
        <TableCell align="center">{e.quantity}</TableCell>
        <TableCell align="center">
          $
          {e?.attributes?.price *
            (1 - e?.attributes?.discount / 100) *
            e.quantity}
        </TableCell>
        <TableCell align="center">
          <Stack
            width={"150px"}
            height={"50px"}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"10px"}
            sx={{ boxShadow: "0 10px 20px 5px rgba(0,0,0,.2)" }}
          >
            {e.quantity && (
              <Stack
                width={"40px"}
                m={"10px"}
                height={"40px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <IconButton onClick={() => dispatch(removeItem(e.id))}>
                  {e.quantity == 1 ? (
                    <DeleteRoundedIcon sx={{ color: "red" }} />
                  ) : (
                    <RemoveIcon />
                  )}
                </IconButton>
              </Stack>
            )}
            {e.quantity ? (
              <Stack
                width={"50px"}
                m={"10px"}
                height={"40px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <IconButton onClick={() => dispatch(addItem(e))}>
                  <AddIcon sx={{ color: "primary.main" }} />
                </IconButton>
              </Stack>
            ) : (
              <Button
                onClick={() => dispatch(addItem(e))}
                variant="contained"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  bgcolor: "primary.main",
                  borderRadius: "10px",
                }}
              >
                shop
                <ShoppingCartRoundedIcon />
              </Button>
            )}
          </Stack>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <>
      {list.length > 0 ? (
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
          <TableContainer component={Paper} sx={{ mt: "13vh" }}>
            <Table
              sx={{ width: "80%", margin: "50px auto" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">PRODUCT NAME</TableCell>
                  <TableCell align="center">IMAGE</TableCell>
                  <TableCell align="center">PRICE</TableCell>
                  <TableCell align="center">QUANTITY</TableCell>
                  <TableCell align="center">TOTAL PRICE</TableCell>
                  <TableCell align="center">ADD/REMOVE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{items}</TableBody>
              <TableFooter>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">TOTAL PRICE</TableCell>
                <TableCell align="center">${totalPrice}</TableCell>
              </TableFooter>
            </Table>
          </TableContainer>
          <Button
            size="large"
            variant="contained"
            color="error"
            sx={{ margin: "50px" }}
            onClick={() => dispatch(clear())}
          >
            Clear Cart
          </Button>
          <Button
            size="large"
            disabled={true}
            variant="contained"
            color="success"
            sx={{ margin: "50px" }}
          >
            Payment
          </Button>
        </Stack>
      ) : (
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
          <Stack
            sx={{
              height: {
                sm: "90vh",
                md: "85vh",
                xs: "90vh",
              },
              my: "13vh",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              justifyContent={"space-evenly"}
              alignItems={"center"}
              direction={"column"}
              width={"95%"}
              sx={{
                height: {
                  sm: "85vh",
                  md: "80vh",
                  xs: "85vh",
                },
              }}
              bgcolor={"Secondary.main"}
              borderRadius={"20px"}
              position={"relative"}
              overflow={"hidden"}
            >
              <Typography
                sx={{ color: "text.main", fontWeight: "bold" }}
                variant={"h2"}
              >
                Oops!
              </Typography>
              <Typography sx={{ color: "text.main" }} variant={"body"}>
                You`re cart is empty
              </Typography>
              <Box
                component={"img"}
                src={cartEmty}
                alt="cart is Emty image"
                width={"30%"}
                height={"60%"}
                sx={{ objectFit: "contain" }}
              />
              <Link
                sx={{ color: "text.main" }}
                to={"/products/all-product/all-category"}
              >
                go to products
              </Link>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
}
