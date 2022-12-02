import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import axios from "axios";
import { useQuery } from "react-query";

import { getAllNews } from "../../api/NewsApi";

const NewsAll = () => {
  const { isLoading, data } = useQuery("getAllNews", () => {
    return axios.get(getAllNews());
  });
  const Newses = data?.data;

  console.log("found Newses :", Newses);

  if (isLoading) {
    return (
      <>
        <h2>Loading ...... ......</h2>
      </>
    );
  }

  return (
      <Grid container  justifyContent="center"
      alignItems="center" spacing={6}>

      {Newses &&
        Newses?.articles?.map((article, index) => {
          return (
            <Grid item xs={4}  key={index}> 
            {/* <Card sx={{ maxWidth: 345 }} >
              <CardHeader
                action={
                  <Button variant="contained" endIcon={<BookmarkAddIcon />}>
                    Read Later
                  </Button>
                }
              >
                <Typography variant="h5" color="text.secondary">
                  {article?.title}
                </Typography>
              </CardHeader>
              <CardMedia
                component="img"
                height="194"
                image={article?.urlToImage}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {article?.description}
                </Typography>
              </CardContent>
            </Card> */}
            <div style={{backgroundColor:"blueviolet",width:"100%"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorum! Ad odio reiciendis corrupti deserunt enim non recusandae labore et voluptas impedit expedita fuga, commodi quaerat. Vero sint deleniti possimus, nihil quisquam quos. Ullam aut veniam, nulla laboriosam recusandae aperiam.
            </div>
            </Grid>
          );
        })}
        </Grid>
  );
};

export default NewsAll;
