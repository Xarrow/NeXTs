import FullWidthGrid from '../components/Layout';
import { mdxListAPIRequest } from '../components/SimpleBox';
import MdxItem from '../components/MdxItem';

// https://medium.com/@aduyng/build-a-spa-with-next-js-and-material-ui-26d2f5f35792

export default function IndexPage(props) {
  const index = "/";
  const gallery = "/gallery";
  const next = "/next";
  const sample = "/sample";
  console.log('%c NeXTs!', 'background: #222; font-weight:700;color: #bada55');
  return (
    <FullWidthGrid
      title={"NeXTs"}
      headName={"MdxList"} >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {props.mdxList.data.map(x => (
          <MdxItem {...x} key={x.id} />
        ))}
      </div>
      {/* <div>
        <Link prefetch href="/gallery?name=liangqunru_all_next&pageSize=100">
          <a> {props.protocol}{props.host}{gallery}?name=liangqunru_all_next&pageSize=100 </a>
        </Link>
      </div>

      <div>
        <Link prefetch href="/api/next/gallery?folderName=weiye&offset=9&pageSize=100&currentPage=1">
          <a> https://helixcs.tk/api/next/gallery?folderName=WY&offset=9&pageSize=100&currentPage= </a>
        </Link>
      </div> */}

    </FullWidthGrid>
  )
}

// req , res 只能在 SSR 中使用
IndexPage.getInitialProps = async ({ pathname, query, asPath, req, res }) => {
  const host = req ? req.headers.host : window.location.hostname;
  // const protocol = req.headers.referer.split('://')[0]
  const folderName = query.folderName || "next_blog"
  const mdxList = await mdxListAPIRequest(folderName);
  console.log(mdxList)
  return { host: host, protocol: "https://", mdxList: mdxList };
}