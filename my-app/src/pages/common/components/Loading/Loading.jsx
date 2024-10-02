import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <span className={styles.spinner}></span>
            <span>Loading...</span>
        </div>
    )
}

export default Loading;