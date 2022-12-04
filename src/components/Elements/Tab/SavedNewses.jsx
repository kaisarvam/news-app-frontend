import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import NewsCard from "../NewsCard";

function SavedNewses({ savedNewses, setSavedNewses, tabName }) {
  useEffect(() => {}, [savedNewses]);
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: "20px" }}>
        {" "}
        {tabName || ""}
      </Typography>

      <Container maxWidth="xl" style={{ backgroundColor: "#F5EBE0",minHeight:"500px" }}>
        <Grid container spacing={4}>
          {savedNewses &&
            savedNewses?.map((article, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                  <NewsCard
                    article={article}
                    setSavedNewses={setSavedNewses}
                    savedNewses={savedNewses}
                  />
                </Grid>
              );
            })}
        </Grid>
        {savedNewses.length < 1 && (
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ marginTop: "40px" }}
          >
            <Grid item container spacing={4} justifyContent="center" >
              <Typography color="error" variant="h3">No Saved News found !!</Typography>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
}

export default SavedNewses;
