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
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import parse from "html-react-parser";
import { Stack } from "@mui/system";

function NewsCard({ article, setSavedNewses, savedNewses }) {
  const [newsSaved, setNewsSaved] = useState(false);
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
    <div>
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={newsSaved?"News added on saved news list !!!":"News removed from saved list !!!"}
        // action={action}
      />
    <Card sx={{ maxWidth: 400, paddingBottom: "20px" }}>
      <CardHeader
        action={(JSON.stringify(savedNewses).includes(JSON.stringify(article)))?<BookmarkAddedIcon onClick={()=>{
            const filteredNewses = savedNewses.filter((newsArticle)=>{
                return(JSON.stringify(newsArticle)!==JSON.stringify(article));
            })
           // console.log("filtered newses :",filteredNewses);
            setSavedNewses(filteredNewses);
            setNewsSaved(false);
            handleClick();
        }} color="primary"/>:
          <BookmarkAddIcon
            onClick={() => {
              if (savedNewses.length > 0) {
                setSavedNewses([...savedNewses, article]);
              } else {
                setSavedNewses([article]);
              }

              setNewsSaved(true);
              handleClick();
            }}
          />
        }
        title={article?.source?.name}
        subheader={article?.publishedAt}
      />

      <CardMedia
        component="img"
        height="194"
        image={article?.urlToImage}
        alt="Paella dish"
      />
      <CardContent component="div" sx={{ minHeight: "230px" }}>
        <Typography component="div" sx={{ marginBottom: "10px" }}>{article?.title}</Typography>

        <Typography component="div" variant="body2" color="text.secondary">
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
    </div>
  );
}

export default NewsCard;
