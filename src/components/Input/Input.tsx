import styles from "./Input.module.css";

const Input = ({ for_, type, place }) => {
    return (
        <form className={styles.container}>
            <label htmlFor={for_}>{place}</label>
            <input className={styles.input} type={type} />
        </form>
    );
};

export default Input;
