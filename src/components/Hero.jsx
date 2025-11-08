import styles from "../components/modules/Hero.module.css"

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
                    <a class={styles.button}>
                        <span class="button-text">Explore Opportunities</span>
                    </a>
                </div>
			</div>
		</div>
    </div>
  )
}
