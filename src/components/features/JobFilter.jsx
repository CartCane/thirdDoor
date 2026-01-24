import styles from '../modules/JobFilter.module.css';
import Button from '../Button';

export default function JobFilter() {
    return(
        <div className={styles.jobFilterContainer}>
            <h2 className={styles.jobFilterHeader}>Browse Jobs</h2>
            <form className={styles.jobFilter} onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Job Title' />
                <input type='text' placeholder="Function" />
                <input type='text' placeholder='Location' />
                <Button color="white">Search</Button>
            </form>
            <p className={styles.note}><span>Note:</span> Due to client confidentiality, we do not publish all the jobs we are currently working on.</p>
        </div>
    )
}
