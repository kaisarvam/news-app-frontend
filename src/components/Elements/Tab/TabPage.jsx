import {
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import CircularProgress from '@mui/material/CircularProgress';
  
  import InfiniteScroll from "react-infinite-scroll-component";
  
  import NewsCard from "../NewsCard";
  
  function TabPage({ Newses, fetchMoreData, totalResults,setSavedNewses,savedNewses ,tabName}) {
    useEffect(() => {}, [Newses]);
    return (
        <>
         <Typography variant="h3" sx={{ marginBottom: "20px" }}>
            {" "}
            {tabName||''}
          </Typography>

      <Container maxWidth="xl" style={{ backgroundColor: "#F5EBE0",minHeight:"500px" }}>
        <InfiniteScroll
          style={{ width: "100%" }}
          dataLength={Newses.length}
          next={() => {
            fetchMoreData();
          }}
          hasMore={Newses.length < totalResults}
          loader={<div style={{height:"100px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><CircularProgress/> </div>}
        >
          <Grid container spacing={4}>
            {Newses &&
              Newses?.map((article, index) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                   <NewsCard article={article} setSavedNewses={setSavedNewses} savedNewses={savedNewses}/>
                  </Grid>
                );
              })}
          </Grid>
        </InfiniteScroll>
        {Newses.length < 1 && (
          <Grid container spacing={4} justifyContent="center" sx={{marginTop:"40px"}}>
          <Grid item container spacing={4} justifyContent="center" >
              <Typography color="error" variant="h3">No content found !!</Typography>
            </Grid>
          </Grid>
        )}
      </Container>
      </>
    );
  }
  
  export default TabPage;
  