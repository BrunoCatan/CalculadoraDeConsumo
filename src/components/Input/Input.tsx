import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <form className={styles.container}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input
                placeholder={props.placeholder}
                className={styles.input}
                value={props.value}
                onChange={props.onChange}
                type={props.type}
            />
        </form>
    );
};

export default Input;
