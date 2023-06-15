import styles from "./Button.module.css";

const Button = ({ onClick }) => {
    return (
        <div className={styles.container}>
            <button onClick={onClick} className={styles.button}>
                Calcular
            </button>
        </div>
    );
};

export default Button;
