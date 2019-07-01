import FullWidthGrid from '../components/Layout';
import Link from 'next/link';

// https://medium.com/@aduyng/build-a-spa-with-next-js-and-material-ui-26d2f5f35792

export default function IndexPage(props) {
  const index = "/";
  const gallery = "/gallery";
  const next = "/next";
  const sample = "/sample";

  return (
    <FullWidthGrid
      title={"NeXTs"}
      headName={"Next.js SSR Sample"} >
      <div>
        <Link prefetch href="/gallery?name=liangqunru_all_next&pageSize=100">
          <a> {props.protocol}{props.host}{gallery}?name=liangqunru_all_next&pageSize=100 </a>
        </Link>
      </div>

      <div>
        <Link prefetch href="/api/next/gallery?folderName=weiye&offset=9&pageSize=100&currentPage=1">
          <a> https://helixcs.tk/api/next/gallery?folderName=WY&offset=9&pageSize=100&currentPage= </a>
        </Link>
      </div>

      <div>
        <Link prefetch href={`${next}?foo=asome_linux.md`}>
          <a> {props.protocol}{props.host}{next}?foo=asome_linux.md </a>
        </Link>
      </div>

      <div>
        <Link prefetch href={`${next}?foo=nginx_demo.md`}>
          <a> {props.protocol}{props.host}{next}?foo=nginx_demo.md </a>
        </Link>
      </div>
      <div>
        <Link href={sample}>
          <a> {props.protocol}{props.host}{sample} </a>
        </Link>
      </div>
    </FullWidthGrid>
  )
}

// req , res 只能在 SSR 中使用
IndexPage.getInitialProps = async ({ pathname, query, asPath, req, res }) => {
  const host = req ? req.headers.host : window.location.hostname;
  // const protocol = req.headers.referer.split('://')[0]
  return { host: host, protocol: "https://" };
}