import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Layout from "../components/Layout";

const FestivalDetails: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h4" gutterBottom>
          Festival Details
        </Typography>
        <Typography paragraph>
          Festival details will be displayed here.
        </Typography>
      </Container>
    </Layout>
  );
};

export default FestivalDetails;
