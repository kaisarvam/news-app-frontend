import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import parse from "html-react-parser";
import { Stack } from "@mui/system";

function NewsCardForSaved({ article, setSavedNewses, savedNewses }) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
      };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  return (
    <>
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="News removed from saved list !!!"
        // action={action}
      />
    <Card sx={{ maxWidth: 400, paddingBottom: "20px" }}>
      <CardHeader
        action={<BookmarkAddedIcon color="primary" onClick={()=>{
            const filteredNewses = savedNewses.filter((newsArticle)=>{
                return(newsArticle!==article);
            })
           // console.log("filtered newses :",filteredNewses);
            setSavedNewses(filteredNewses);
            handleClick();
        }} />}
        title={article?.source?.name}
        subheader={article?.publishedAt}
      />

      <CardMedia
        component="img"
        height="194"
        image={article?.urlToImage}
        alt="Paella dish"
      />
      <CardContent sx={{ minHeight: "230px" }}>
        <Typography sx={{ marginBottom: "10px" }}>{article?.title}</Typography>

        <Typography variant="body2" color="text.secondary">
          {parse(article?.description || "")}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" sx={{ width: "100%" }} justifyContent="center">
          <Button
            variant="contained"
            size="small"
            sx={{ width: "100%" }}
            href={article?.url}
            endIcon={<ReadMoreIcon />}
          >
            Read More
          </Button>
        </Stack>
      </CardActions>
    </Card>
    </>
  );
}

export default NewsCardForSaved;
