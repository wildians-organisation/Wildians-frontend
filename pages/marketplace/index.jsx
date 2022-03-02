//Component represent MarketPlace

import makeStyles from "@material-ui/styles/makeStyles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 14,
    color: "blue",
  },
  h1: {
    color: "blue",
  },
});

// Get items from backend
const MarketPlace = ({ setCart, cart }) => {
  const getArticles = () => {
    axios
      .get("http://localhost:8080/api/article")
      .then(function (response) {
        // handle success
        setValue(
          response.data.map((obj, id) => {
            return {
              name: obj.name,
              age: obj.age,
              price: obj.price,
              image: obj.image,
              id,
            };
          })
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const [value, setValue] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const classes = useStyles();

  // Display items in a list with add button on each items
  return (
    <Box sx={{ borderColor: "divider", height: "100%", borderBottom: "1px" }}>
      <ImageList
        sx={{ width: "60%", height: "100%", ml: "20%", mt: "50px" }}
        cols={3}
      >
        {value.map((item, id) => (
          <ImageListItem key={"marketplace" + id}>
            <img
              src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name + " - " + item.price + "$"}

              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.name}`}
                  onClick={() => {
                    setCart([...cart, item]);
                  }}
                  id={"Add" + id}
                >
                  <AddCircleIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MarketPlace;
