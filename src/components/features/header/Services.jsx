import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../modules/Services.module.css";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={styles.servicesDropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {/* Trigger */}
      <button type="button" className={styles.servicesBtn}>
        Services ▾
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li>
            <NavLink to="/thirdDoor/services#hr-consultation">
              HR Consultation
            </NavLink>
          </li>

          <li>
            <NavLink to="/thirdDoor/services#manager-consultation">
              Manager Consultation
            </NavLink>
          </li>
        </ul>
      )}
    </li>
  );
}
