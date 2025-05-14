import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Layout from "../components/Layout";

const HiddenGems: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h4" gutterBottom>
          Hidden Gems
        </Typography>
        <Typography paragraph>
          Discover lesser-known but culturally rich festivals across India.
        </Typography>
      </Container>
    </Layout>
  );
};

export default HiddenGems;
