import styles from './modules/Highlighter.module.css'
import Cards from './features/home/Cards'
import organize from '../assets/organized.jpg'
import unorganize from '../assets/informal.jpg'


export default function Highlighter() {
  return (
      <div className={styles.cards}>
        <div><Cards fsize="1rem" jContent="end" bg_image={organize} head="Organized Sector Jobs" description="The organized sector includes registered companies or establishments that follow government labor laws, pay taxes, offer fixed wages, and provide employee benefits such as PF, ESI, and paid leaves."/></div>
        <div><Cards fsize="1rem" jContent="end" bg_image={unorganize} head="Unorganized Sector Jobs" description="The unorganized sector includes unregistered, small-scale, or informal setups — often without formal employment contracts or fixed wages."/></div>
      </div>
  )
}
