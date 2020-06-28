import FullWidthGrid from '../components/Layout';
import Highlight from 'react-highlight';
import { mdxAPIRequest } from '../components/SimpleBox';
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';

function NextPage(props) {
  // set line number
  // hljs.initLineNumbersOnLoad({
  //   singleLine: true
  // });

  var md = MarkdownIt({
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
    <FullWidthGrid {...props}>
      <div className="markdown">
        <Highlight innerHTML={true} languages={["bash", "javascript", "python", "java", "html"]}>
          {md.render(props.mdText)}
        </Highlight>
      </div>
    </FullWidthGrid>
  )
}

NextPage.getInitialProps = async ({ query, res }) => {
  // /next?foo=<resource file name>
  const fileName = query.fileName
  const fileId = query.fileId;
  console.log(`fileName=${fileName} , fileId=${fileId}`)

  let mdText = '';

  if (fileId !== undefined && "" != fileId) {
    mdText = await mdxAPIRequest(fileId);
  }

  // const mdText = await resd.text();
  // const contentType = await resd.headers.get("content-type");
  // console.log(`==> ${contentType}`);

  // // 400
  // if (contentType && contentType.indexOf("json") > -1) {
  //   const retCode = await resd.json;
  //   if (200 != retCode) {
  //     return { title: `${foo} 没有找到` }
  //   }
  // }
  // console.log(mdText)
  // 文章标题首字母大写
  const title = mdText['data']['name'].replace(/^\S/, s => s.toUpperCase());
  return {
    mdText: mdText['data']['text'],
    title: title,
    createdTime:mdText['data']['date'],
    modifiedTime:mdText['data']['modifiedTime'],
    node:mdText['tag'],
    headName:title
  }
}

export default NextPage;