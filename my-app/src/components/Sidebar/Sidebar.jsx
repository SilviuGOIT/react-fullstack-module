import styles from "./Sidebar.module.css";
import { HiAcademicCap, HiBookOpen } from "react-icons/hi";

const Sidebar = () => {
  const menuItems = [
    {
      id: "1",
      name: "University",
      icon: <HiBookOpen />,
    },
    {
      id: "2",
      name: "Faculties",
      icon: <HiAcademicCap />,
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarBrandBox}></div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.icon} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
