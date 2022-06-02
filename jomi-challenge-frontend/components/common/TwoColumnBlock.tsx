import React from 'react'
import { Box, Button, Grid } from "@mui/material";
import Styles from "./TwoColumnBlock.module.css";
import Image from 'next/image';
import { Style } from '@mui/icons-material';

const TwoColumnBlock = ({section}) => {
  console.log("Two column block", section[2].__typename);

  let itemCount = 0;

  return (
    <div className={Styles.twoColumn_block}>
        <h3>Access. Anytime, Anywhere</h3>
        { section.filter( item => (item.__typename == "ComponentCommonTwoColumnBlock")).map( (item, index) => {
              return (
                <div>
                  <Box key={ index }>
                    <Grid className={`${Styles.grid_row} ${Styles.rowSecond} ${Styles.mb_100}` }  container spacing={2}>
                      <Grid item xs={6} md={6} className={`${ index == 1 ? Styles.orderTwo : ""} grid-item` }>
                          <div className={`grid_column ${index == 1 ? Styles.third_column : Styles.first_column }`}>
                              <h3 className={Styles.textLeft}>{ item.sectionTitle }</h3>
                              <p> { item.sectionDescription } </p>
                              <div className={Styles.buttonGroup}>
                                  <Button variant="outlined">{ item.buttonText }</Button>
                              </div>
                          </div>
                      </Grid>
        
                      <Grid item xs={6} md={6} className="grid-item">
                          <div className="grid_column">
                            <Image layout="responsive" src={ process.env.STRAPI_CMS_URL+""+item.Image?.data?.attributes?.url } width={180} height={120} alt="left-column" />
                          </div>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
              )
          })
        }
    </div>
  )
};

export default TwoColumnBlock;
