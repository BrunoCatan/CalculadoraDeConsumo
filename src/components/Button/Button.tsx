import styles from "./Button.module.css";

const Button = ({ onClick }: any) => {
    return (
        <div className={styles.container}>
            <button onClick={onClick} className={styles.button}>
                Calcular
            </button>
        </div>
    );
};

export default Button;
