import React from "react";
import ButtonLink from '../components/buttonLink.js';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

function About() {
  return (
    <Box>
        <h1>This is my about page</h1>
            <ButtonLink route="/">
                Home Page
            </ButtonLink>
      </Box>
  );
}

export default About;
