import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../router/routeNames";
import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";

import styles from "./index.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {Object.entries(ROUTE_NAMES).map(([pageName, path]) => (
        <Link className={styles.link} key={path} to={path}>
          {startCase(capitalize(pageName))}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
