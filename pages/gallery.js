import React from 'react';
import GridList from '@material-ui/core/GridList';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// mock data
// import tileData from './tileData';
import Header from '../components/Header';
import cssInJs from '../components/Style';
import fetch from 'isomorphic-unfetch';
import { galleryAPI } from '../components/APIConfig';
import { stringParse } from '../components/Utils';

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

export default class ImageGridList extends React.Component {
  static async getInitialProps({ pathname, query }) {
    const folderName = query.name || "liangqunru_all_next";
    const pageSize = query.pageSize || 100;
    const offset = query.offset || 9;
    const currentPage = query.currentPage || 1

    console.log("getInitialProps");

    return {
      name: folderName,
      pageSize: pageSize,
      offset: offset,
      pathName: pathname,
      currentPage: currentPage,
    };
  }
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      pageSize: props.pageSize,
      offset: props.offset,
      pathName: props.pathName,
      currentPage: props.currentPage,
      items: [],
      isLoading: true,
      hasMoreItems: false,
      previousSize: 1068,
    }

    console.log("constructor")
  }
  componentDidMount() {
    // do some paginated fetch
    this.loadMore();
    window.addEventListener("scroll", this.handleScroll);
    console.log("componentDidMount")
  }

  handleScroll = e => {
    // 屏幕大小
    const windowSize = window.screen.height;
    // 当前屏幕距离top尺寸
    const currentTop = document.documentElement.scrollTop;
    const fullSize = windowSize+currentTop;
    // 上一次保存的fullSize
    const previousSize = this.state.previousSize;
    // const deltaTop = fullSize - previousTop;
    console.log(`windowSize=${windowSize},currentTop=${currentTop},fullSize=${fullSize} == preSize=${previousSize}`)
    //  当前top - 上一页top差 > 1000 加载数据
    if ((fullSize >= previousSize)&&this.state.hasMore) {
      this.setState({ previousSize: parseInt(previousSize)+900 ,currentPage: parseInt(this.state.currentPage) + 1})
      this.loadMore();
    }
  }

  loadMore = () => {
    const currentPage = this.state.currentPage;
    console.log("==>"+currentPage)
    // 请求simplebox 接口
    fetch("https://helixcs.tk/api/next/gallery?folderName=weiye&offset=9&pageSize=1000&currentPage="+currentPage)
      .then(res => res.json())
      .then(
        res => {
          if (res.remain > 0) {
            this.setState({ hasMore: true })
          } else {
            this.setState({ hasMore: false })
          }
          this.setState(state => ({
            items: [...state.items, ...res.data],
            cursor: res.cursor,
            isLoading: false
          }))
        },
        error => {
          this.setState({ isLoading: false, error })
        }
      )
  }

  render() {
    console.log("render");

    const classes = cssInJs;
    const tileData = this.state.items;
    const pathName = this.state.pathName;

    const loader = <div className="loader">Loading ...</div>;
    return (
      <div className={classes.root}>
        <Header headName={pathName} />

        <GridList cellHeight={300} style={classes.ImageGridLst_GridList} cols={4}>

          {tileData.map(tile => (
            <GridListTile key={tile.key} cols={tile.cols || 1}>
              <img src={tile.images.replace("?stream=true","").replace("helixcs.tk","helixcs.herokuapp.com")} alt={tile.title} />
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
}
