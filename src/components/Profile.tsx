import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/alison664.png" alt="Alison Lamb" />
            <div>
                <strong>Alison Lamb</strong>
                <p>
                    <img src="icons/level.jpeg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
} 