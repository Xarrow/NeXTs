import React from 'react';
import GridList from '@material-ui/core/GridList';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import Header from '../components/Header';
import cssInJs from '../components/Style';

// 未使用
const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  ImageGridLst_GridList: {
    width: "100%",
    height: "100%",
    paddingTop: 50,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function ImageGridList(props) {
  const classes = cssInJs;
  
  return (
    <div className={classes.root}>
      <Header headName={props.pathname}/>
      <GridList cellHeight={300} style={classes.ImageGridLst_GridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.key} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.getInitialProps = async ({ pathname })=>{
  return { pathname :pathname};
}