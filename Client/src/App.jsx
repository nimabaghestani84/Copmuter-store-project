import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import { Box, Paper } from "@mui/material";
import Footer from "./Components/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import ProductDitail from "./Pages/ProductDetail";
import NotFound from "./Pages/NotFaund";
import Products from "./Pages/Products";
import BlogDitail from "./Pages/BlogDitail";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";
import Auth from "./Pages/Auth";
import Blogs from "./Pages/Blogs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const { token } = useSelector((state) => state.auth);
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#1976d2" : "#0288d1",
      },
      Secondary: {
        main: darkMode ? "#272727" : "#ffffff",
        secend: darkMode ? "#0e161e" : "#fbfdfe",
      },
      text: {
        main: darkMode ? "#f6f7f8" : "#0f1214",
        secend: darkMode ? "#b3bac5" : "#626569",
        primarytext: "#ffffff",
      },
    },
  });

  const location = useLocation();
  return (
    <AnimatePresence>
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <>
          <Navbar check={darkMode} change={() => setDarkMode(!darkMode)} />
          <Box minHeight={"80vh"}>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/auth"
                element={!token ? <Auth /> : <Navigate to={"/"} />}
              />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/products/:categoriesId/:categoriesName"
                element={<Products />}
              />
              <Route
                path="/product-ditail/:id/:name"
                element={<ProductDitail />}
              />
              <Route
                path="/blog-ditail/:blogID/:blogName"
                element={<BlogDitail />}
              />
              <Route path="/blogs" element={<Blogs />} />
              <Route
                path="/cart"
                element={token ? <Cart /> : <Navigate to={"/auth"} />}
              />
              <Route path="/search/:query" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </>
      </Paper>
    </ThemeProvider>
    </AnimatePresence>
  );
}
