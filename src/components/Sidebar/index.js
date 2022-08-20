import { Link } from "react-router-dom";
import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";

import { ROUTE_NAMES } from "../../router/routeNames";

import styles from "./index.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.wrapper}>
      {Object.entries(ROUTE_NAMES).map(([pageName, path]) => (
        <Link className={styles.link} key={path} to={path}>
          {startCase(capitalize(pageName))}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
