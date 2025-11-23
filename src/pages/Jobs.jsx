import styles from '../components/modules/JobHeader.module.css'
import Button from '../components/Button'

export default function Jobs({state}) {
  return (
    <div>
        <JobHeader />
        <JobList data={state}/>
    </div>
  )
}

function JobHeader(){
    return(
        <div className={styles.container}>
            <h1>Guiding Your Path to Prosperity</h1>
            <p>Your career journey is just beginning, and Third-Door is here to open the doors to endless possibilities. With our personalized guidance and industry insights, we help you step into opportunities that lead to growth, fulfillment, and long-term success.</p>
            <Button fm="'Inter', sans-serif"  fw="600" bg="orange" color="white">Connect with an Expert</Button>
        </div>
    )
}

function JobList({data}){

    if (!data) return <p>Loading jobs...</p>

    return(
        <div className={styles.joblist}>
            <header>
                <h2>Job Opportunities</h2>
            </header>
            <div className={styles.cardContainer}>
                {data.map((i, index)=> <JobCard key={index} talent={i["Talent Pool"]} client={i["Client"]} place={i["Work Location"]} salary={i["Salary"]}/>)}
            </div>
        </div>
    )
}

function JobCard({talent, client, place, salary}){
    return(
        <div className={styles.card}>
            <a className={styles.anchor}>
                <div className={styles.activelyLabel}>
                    <span>Actively hiring</span>
                </div>
                <div className={styles.heading}>
                    <div className={styles.content}>
                        <h4>{talent}</h4>
                        <span>{client}</span>
                    </div>
                </div>
                <ul className={styles.list}>
                    <li>
                        {place}
                    </li>
                    <li>
                        ₹ {salary}
                    </li>
                </ul>
                <div className={styles.footer}>
                    <span>Job</span>
                    <span>Apply</span>
                </div>
            </a>
        </div>
    )
}