import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';
import Markdown from 'react-markdown';

function NextPage({ star ,title}) {
    return (
        <Layout>
            <div>Next Stars :{star}</div>
            <h1>{title}</h1>
            <div className="markdown">
                <Markdown
                    source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}
                />
            </div>
            <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
        </Layout>)

}

NextPage.getInitialProps = async ({ req }) => {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { star: json.stargazers_count ,title:"markdown"}
}
export default NextPage;