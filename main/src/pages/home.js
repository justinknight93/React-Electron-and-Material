import React from "react";
import ButtonLink from '../components/buttonLink.js';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box>
        <h1>This is my home page</h1>
            <ButtonLink route="/about">
                About Page
            </ButtonLink>
      </Box>
  );
}

export default Home;
