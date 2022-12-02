import {
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  import React, { useEffect } from "react";
import NewsCard from "../Elements/NewsCard";

import NewsCardForSaved from "../Elements/NewsCardForSaved";
  
  function SavedNewses({ savedNewses ,setSavedNewses}) {
    useEffect(() => {}, [savedNewses]);
    return (
        <Container maxWidth="xl" style={{ backgroundColor: "#F5EBE0" }}>
       
          <Grid container spacing={4}>
            {savedNewses &&
              savedNewses?.map((article, index) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                   <NewsCard article={article} setSavedNewses={setSavedNewses} savedNewses={savedNewses} />
                  </Grid>
                );
              })}
          </Grid>
        {savedNewses.length < 1 && (
          <Grid container spacing={4} justifyContent="center" sx={{marginTop:"40px"}}>
            <Grid item  container spacing={4} justifyContent="center" >
              <Typography variant="h3">No content found !!</Typography>
              
            </Grid>
          </Grid>
        )}
      </Container>
    );
  }
  
  export default SavedNewses;
  