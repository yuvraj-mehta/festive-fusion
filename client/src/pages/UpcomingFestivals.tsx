import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Layout from "../components/Layout";

const UpcomingFestivals: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h4" gutterBottom>
          Upcoming Festivals
        </Typography>
        <Typography paragraph>
          Stay updated with the latest festival events happening across India.
        </Typography>
      </Container>
    </Layout>
  );
};

export default UpcomingFestivals;
