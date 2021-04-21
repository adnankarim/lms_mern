import styles from './basepage.module.scss'

export default function Basepage({ children }) {
    return (<div class={styles.bpclass}>
        {children}
    </div>);
};
