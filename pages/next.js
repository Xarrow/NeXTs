import fetch from 'isomorphic-unfetch';
import FullWidthGrid from '../components/Layout';
import ReactMarkdown from 'react-markdown';

function NextPage({ title, mdText }) {

  return (
    <FullWidthGrid title={title}>
      <div className="markdown">
        <ReactMarkdown source={mdText} escapeHtml={false} />
      </div>
    </FullWidthGrid>)
}

NextPage.getInitialProps = async ({ query, res }) => {
  // /next?foo=<resource file name>
  const foo = query.foo;
  console.log('FOO', foo)

  // foo resource is blank
  if (undefined == foo || "" === foo) {
    return { title: `参数资源为空` }
  }
  const resd = await fetch(
    `https://simple-box.helixcs.now.sh/api/read?fileName=${foo}`)

  const mdText = await resd.text();
  const contentType = await resd.headers.get("content-type");
  console.log(`==> ${contentType}`);

  // 400
  if (contentType && contentType.indexOf("json") > -1) {
    const retCode = await resd.json;
    if (200 != retCode) {
      return { title: `${foo} 没有找到` }
    }
  }

  return { title: foo, mdText: mdText }
}

export default NextPage;