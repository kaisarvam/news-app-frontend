import {
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/system";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsCard from "../Elements/NewsCard";

function SportsNews({ Newses, fetchMoreData, totalResults,setSavedNewses,savedNewses}) {
  useEffect(() => {}, [Newses]);
  return (
    <Container style={{ backgroundColor: "#F5EBE0" }}>
      <InfiniteScroll
        style={{ width: "100%" }}
        dataLength={Newses.length}
        next={() => {
          fetchMoreData();
        }}
        hasMore={Newses.length < totalResults}
        loader={
          <div
            style={{
              height: "100px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />{" "}
          </div>
        }
      >
        <Grid container spacing={4}>
          {Newses &&
            Newses?.map((article, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                  <NewsCard article={article}  setSavedNewses={setSavedNewses} savedNewses={savedNewses} />
                </Grid>
              );
            })}
        </Grid>
      </InfiniteScroll>
      {Newses.length < 1 && (
       <Grid container spacing={4} justifyContent="center" sx={{marginTop:"40px"}}>
       <Grid item  container spacing={4} justifyContent="center" >
           <Typography variant="h3">No content found !!</Typography>
         </Grid>
       </Grid>
      )}
    </Container>
  );
}

export default SportsNews;
