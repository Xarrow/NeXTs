import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Button from '@material-ui/core/Button'


class HelloUA extends React.Component {
    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        return { userAgent }
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div>Hello {this.props.userAgent}
                    <p className="example" style={{ color: 'red' }}>Hello Red</p>
                    <div>Click {''}
                        <Link href="/about">
                            <a>Here</a>
                        </Link> {''}
                        to read more.
                    </div>
                </div>

                <div>
                    <Link href="/next">
                        <a>Next</a>
                    </Link>

                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                </div>
            </div>
        )
    }
}
function IndexPage() {
    return (<div>Index</div>)
}

export default HelloUA;