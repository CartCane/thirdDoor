import React from 'react'
import Description from './Description'
import ContactInfo from './ContactInfo'
import QuickLink from './QuickLink'
import styles from './FooterHead.module.css'

export default function FooterHead() {
  return (
    <div className={styles.footerHead}>
      <Description />
      <ContactInfo />
      <QuickLink />
      <RecruitmentMenu />
      <IndustryMenu />
    </div>
  )
}

function IndustryMenu() {
 return (
    <div className={styles.industryMenu}>
      <h4>Industry</h4>
      <ul>
        <li>IT & BPO</li>
        <li>Hospitality & Catering</li>
        <li>Healthcare</li>
        <li>Hotel Restaurant </li>
        <li>Retail</li>
        <li>Construction</li>
        <li>logistic</li>
      </ul>
    </div>
 )
}

function RecruitmentMenu() {
  return (
    <div className={styles.recruitmentMenu}>
      <h4>Recruitment</h4>
      <ul>
        <li>HR Consultation</li>
        <li>Help Desk</li>
        <li>IT Support</li>
        <li>Campus Recruitment</li>
        <li>Jop Openings</li>
        <li>Application Process</li>
        <li>Internship Programs</li>
      </ul>
    </div>
  )
}
