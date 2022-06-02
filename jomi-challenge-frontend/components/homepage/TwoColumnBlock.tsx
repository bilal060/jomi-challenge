import React from 'react'
import { Box, Button, Grid } from "@mui/material";
import Styles from "./TwoColumnBlock.module.css";
import Image from 'next/image'

function TwoColumnBlock() {
  return (
    <div className={Styles.twoColumn_block}>
        <h3>Access. Anytime, Anywhere</h3>
        <Box>
          <Grid className={Styles.grid_row} container spacing={2}>
            <Grid item xs={6} md={6}>
                <div className="grid_column">
                  <Image layout="responsive" src="/two-column-image-left.png" width={180} height={120} alt="left-column" />
                </div>
            </Grid>
            <Grid item xs={6} md={6}>
                <div className={`grid_column ${Styles.second_column}`}>
                    <h3>Individual Subscription</h3>
                    <p>Whether you're a medical student, physician, etc. An individual subsription can help you stay up to date in current techniques.</p>
                    <div className={Styles.buttonGroup}>
                        <Button variant="outlined">Learn More</Button>
                    </div>
                </div>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid className={`${Styles.grid_row} ${Styles.mt_100}` }  container spacing={2}>
            <Grid item xs={6} md={6}>
                <div className={`grid_column ${Styles.third_column}`}>
                    <h3 className={Styles.textLeft}>Institutional Subscription</h3>
                    <p>Whether you're a medical student, physician, etc. An individual subsription can help you stay up to date in current techniques.</p>
                    <div className={Styles.buttonGroup}>
                        <Button variant="outlined">Learn More</Button>
                    </div>
                </div>
            </Grid>

            <Grid item xs={6} md={6}>
                <div className="grid_column">
                  <Image layout="responsive" src="/two-column-image-right.png" width={180} height={120} alt="left-column" />
                </div>
            </Grid>

          </Grid>
        </Box>

    </div>
  )
}

export default TwoColumnBlock