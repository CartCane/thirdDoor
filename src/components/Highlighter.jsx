import React from 'react'
import styles from './modules/Highlighter.module.css'
import girl from '../assets/girl.png'
import Cards from './features/home/Cards'
import organize from '../assets/organized.jpg'
import unorganize from '../assets/informal.jpg'
// import door from '../assets/doors.png'

export default function Highlighter() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <h1>Welcome to ThirdDoor - Your Partner in Job seeking and providing better opportunities</h1>
          <p>Third Door is a platform dedicated to helping students and job seekers who couldn’t secure opportunities through campus placements or conventional job portals. We believe that every candidate deserves a fair chance to enter the industry they’re passionate about — and our mission is to create that chance.
            Our service acts as the third door — when the first (campus placement) and second (off-campus applications) don’t open. We step in to guide, support, and connect talented individuals with opportunities that truly match their skills, interests, and career goals — completely free of cost.
          </p>
        </div>
        <div className={styles.pic}>
          <img src={girl}/>
        </div>
      </div>
      <div className={styles.cards}>
        <Cards image={organize} head="Organized Sector Jobs" description="The organized sector includes registered companies or establishments that follow government labor laws, pay taxes, offer fixed wages, and provide employee benefits such as PF, ESI, and paid leaves."/>
        <Cards image={unorganize} head="Unorganized Sector Jobs" description="The unorganized sector includes unregistered, small-scale, or informal setups — often without formal employment contracts or fixed wages."/>
      </div>
    </div>
  )
}
