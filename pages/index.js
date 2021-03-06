import FullWidthGrid from '../components/Layout';
import { mdxListAPIRequest } from '../components/SimpleBox';
import MdxItem from '../components/MdxItem';

// https://medium.com/@aduyng/build-a-spa-with-next-js-and-material-ui-26d2f5f35792

// AMP
// export const config  = { amp : true};

export default function IndexPage(props) {
  console.log('%c NeXTs!', 'background: #222; font-weight:700;color: #bada55');

  return (
    <FullWidthGrid
      title={"你好，世界！"}
      headName={"FuncTIons"}
      node={props.currentNode} >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {props.mdxListData.map(x => (
          <MdxItem {...x} key={x.id} />
        ))}
      </div>
    </FullWidthGrid>
  )
}

// req , res 只能在 SSR 中使用
IndexPage.getInitialProps = async ({ pathname, query, asPath, req, res }) => {
  const host = req ? req.headers.host : window.location.hostname;
  // const protocol = req.headers.referer.split('://')[0]
  const folderName = query.folderName || "next_blog"
  const mdxListReponse = await mdxListAPIRequest(folderName);
  // console.log(mdxList)
  const mdxListData = mdxListReponse.data;
  const currentNode = mdxListReponse.tag;
  return { host: host, protocol: "https://", mdxListData: mdxListData, node: currentNode };
}