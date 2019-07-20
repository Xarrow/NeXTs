import React from 'react';
import Grid from '@material-ui/core/Grid';
import Aracle from '../components/Aracle';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import styles from '../static/css/jian.css';

function Body(props) {
    return (
        <div className={styles.BodyGrid}>
            {/* <p className={styles.watermark}>演示测试项目</p> */}

            <Grid container spacing={2}>
                <Hidden xsDown>
                    <Grid item xs></Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                    <Aracle title={props.title} createdTime={props.createdTime} modifiedTime={props.modifiedTime} >
                        {props.children}
                    </Aracle>
                </Grid>
                <Hidden xsDown>
                    <Grid item xs></Grid>
                </Hidden>
            </Grid>
        </div>
    )
}
export default withWidth()(Body);
