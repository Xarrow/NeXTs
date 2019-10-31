import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import React from 'react';
import styles from '../static/css/jian.css';

export default class MdxItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            
            <Card className={styles.mdxItem} key={this.props.id}>
                <CardContent>
                    {/* <Typography className={""} gutterBottom>
                        {this.props.id}
                    </Typography> */}
                    <Typography variant="h5" >
                        <Link prefetch href={`/next?fileId=${this.props.id}`} >
                            <a className={styles.aaa}>{this.props.name}</a>
                        </Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                        创建：{this.props.createdTime}
                        <br />
                        大小：{this.props.size} 字节
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">更多</Button> */}
                </CardActions>
            </Card>
        )
    }
}