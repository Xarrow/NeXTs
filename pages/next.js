import fetch from 'isomorphic-unfetch';
import FullWidthGrid from '../components/Layout';
import Highlight from 'react-highlight';
import marked from 'marked';

function NextPage({ title, mdText }) {

  var hljs = require('highlight.js'); // https://highlightjs.org/

  // 通常的默认值们
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>';
        } catch (__) { }
      }

      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  }).enable(['link']).enable('image');

  return (
    <FullWidthGrid title={title}>
      <div className="markdown">
        <Highlight innerHTML={true} languages={["bash", "javascript", "python", "java", "html"]}>{md.render(mdText)}</Highlight>
      </div>
    </FullWidthGrid>
  )
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
    `https://helixcs.tk/api/read?fileName=${foo}`)

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