import FullWidthGrid from '../components/Layout';
import Link from 'next/link';

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
        <Link prefetch href="/gallery?name=liangqunru&pageSize=20">
          <a> {props.protocol}{props.host}{gallery}?name=liangqunru&pageSize=20 </a>
        </Link>
      </div>

      <div>
        <Link prefetch href="/gallery?name=WY&pageSize=20">
          <a> {props.protocol}{props.host}{gallery}?name=WY&pageSize=20 </a>
        </Link>
      </div>

      <div>
        <Link prefetch href={`${next}?foo=asome_linux.md`}>
          <a> {props.protocol}{props.host}{next}?foo=asome_linux.md </a>
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