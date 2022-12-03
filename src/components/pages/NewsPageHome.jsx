import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFireBase from "../../Hooks/useFireBase";
import LayoutWrapper from "../Elements/Layout/LayoutWrapper";
import NewsMainPage from "../Elements/NewsMainPage";

function NewsPageHome() {
  const navigate = useNavigate();
  const { user } = useFireBase();
  useEffect(() => {
    if (!user.email) {
      navigate("/login");
    }
  }, [user,navigate]);
  return (
    <div>
      <LayoutWrapper>
        <Container maxWidth="xl" sx={{ backgroundColor: "#F5EBE0" }}>
          <NewsMainPage />
        </Container>
      </LayoutWrapper>
    </div>
  );
}

export default NewsPageHome;
