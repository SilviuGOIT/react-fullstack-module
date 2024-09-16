import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { HiAcademicCap, HiBookOpen } from "react-icons/hi";

const Sidebar = () => {
  const menuItems = [
    {
      id: "1",
      name: "University",
      icon: <HiBookOpen />,
      path: "/",
    },
    {
      id: "2",
      name: "Faculties",
      icon: <HiAcademicCap />,
      path: "/faculties",
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarBrandBox}></div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link key={item.id} to={item.path}>
              {item.icon} {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
