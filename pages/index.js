import FullWidthGrid from '../components/Layout';
import Link from 'next/link';

export default function IndexPage(props) {
  return (
    <FullWidthGrid
      title={"NEXT"}
      headName={"Next.js SSR Sample"} >
      <div>
        <Link href="/lqr">
          <a> {props.protocol}{props.host}/lqr </a>
        </Link>
      </div>
      <div>
        <Link href="/next?foo=asome_linux.md">
          <a> {props.protocol}{props.host}/next?foo=asome_linux.md </a>
        </Link>
      </div>
      <div>
        <Link href="/sample">
          <a> {props.protocol}{props.host}/sample </a>
        </Link>
      </div>
    </FullWidthGrid>
  )
}

IndexPage.getInitialProps = async ({ pathname, query, asPath, req, res }) => {
  const host = req ? req.headers.host : window.location.hostname;
  // const protocol = req.headers.referer.split('://')[0]
  return { host: host, protocol: "https://" };
}