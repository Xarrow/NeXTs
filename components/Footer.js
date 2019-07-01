import styles from "../static/jian.css";

export default function Footer(props) {
    return (
        <div>
            <div className={styles.footer}>
                <img src="/static/svgs/nextjs.svg" className={styles.nextjs} />
                <span> + </span>
                <img src="/static/svgs/google_drive.svg" className={styles.google_drive} />
            </div>
            <div className={styles.footer}>
                {/* <span>Powered By</span> */}
                <span>NEXT.js</span>
                <span> | </span>
                <span>Google Drive</span>
                <span> 强力驱动</span>
            </div>
        </div>
    )
}