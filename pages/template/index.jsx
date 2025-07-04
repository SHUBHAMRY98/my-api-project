import React from "react";
import { Container } from "@mui/material";
import { SeoMeta } from "@/components/common/Meta";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Faqs from "@/components/common/Faqs";

function PageContent() {
  return (
    <>
      <SeoMeta title="Template | Click N Event" description="" keywords="" />
      <div className="main_container">
           <Header showTopHeader={true} />
      <Container maxWidth="lg" sx={{ pt: 1, pb: 1 }}>
      <h1 className="pagetitle">Page Title</h1>
        Page content will goes here Page content will goes here Page content
        will goes here Page content will goes here Page content will goes here
        Page content will goes here Page content will goes here Page content
        will goes here Page content will goes here Page content will goes here
        Page content will goes here Page content will goes here Page content
        will goes here Page content will goes here Page content will goes here
        Page content will goes here Page content will goes here Page content
        will goes here Page content will goes here Page content will goes here
        Page content will goes here Page content will goes here Page content
        will goes here Page content will goes here
      </Container>
      <Faqs />
      <Footer />
      </div>
    </>
  );
}

export default PageContent;
