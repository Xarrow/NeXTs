import styles from "../static/css/jian.css";

export default function Footer(props) {
    return (
        <div className={styles.footer0}>
            <div className={styles.footer1}>
                <img src="/static/svgs/nextjs.svg" alt="nextjs.svg" className={styles.nextjs} />
                <span> + </span>
                <img src="/static/svgs/google_drive.svg" alt="google_drive.svg" className={styles.google_drive} />
            </div>
            <div className={styles.footer1}>
                {/* <span>Powered By</span> */}
                <span>NEXT.js</span>
                <span> | </span>
                <span>Google Drive</span>
                <span> 强力驱动</span>
            </div>
            {props.node !== undefined ? (
                <div className={styles.footer1}>
                    <span> 当前节点: {props.node} </span>
                </div>
            ) : (
                    <div className={styles.footer1}>
                        <span></span>
                    </div>
                )}
        </div>
    )
}