import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


export default function ToTopButton() {
  const [display, setDisplay] = useState("none");

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setDisplay("block");
      } else if (window.scrollY < 50) {
        setDisplay("none");
      }
    });
  }

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <div
          style={{ display: display, textAlign:"center",padding:"8px 8px 0px 8px"}}
          onClick={() => {
            topFunction();
          }}
          className="moveToTop"
        >
          <ArrowCircleUpIcon sx={{width:"50px",height:"50px",marginTop:"-4px",marginLeft:"-5px"}}/>
        </div>
    </div>
  );
}
