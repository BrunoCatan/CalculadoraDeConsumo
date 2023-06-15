import styles from "./Button.module.css";

const Button = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>Calcular</button>
        </div>
    );
};

export default Button;
