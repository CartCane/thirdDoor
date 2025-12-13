import styles from "../components/modules/Hero.module.css"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <div class={styles.inner}>
        <div class={styles.container}>
            <div class={styles.textBox}>
                <h1 class={styles.title}>
                    Built for Job Seekers.<br />
                    Powered by Tech.<br />
                    Driven by Results.  
                </h1>				        
            </div>
            <div class={styles.buttonBox}>
                <div class={styles.buttonWrapper}>
                    <Link class={styles.button} to="jobs">
                        <span class="button-text">Explore Opportunities</span>
                    </Link>
                </div>
			</div>
		</div>
    </div>
  )
}
