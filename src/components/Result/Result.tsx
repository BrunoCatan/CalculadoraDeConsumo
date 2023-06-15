import styles from "./Result.module.css";

const Result = ({ value }) => {
    return (
        <form className={styles.container}>
            <label>Resultado:</label>
            <input className={styles.input} value={value} disabled />
        </form>
    );
};

export default Result;
