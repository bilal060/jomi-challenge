import React from 'react'
import { Box, Typography } from "@mui/material";
import Styles  from "./Header.module.css";

const Header = () => {
  return (
    <Box>
        <div className = {Styles.headerContent}>
            <Typography variant="h3">
                <a className="header-link" href="/">Cutting edge content.</a>
            </Typography>
        </div>
    </Box>
  )
}

export default Header