import { Routes, Route } from "react-router-dom";

import ProfileContainer from "../pages/Profile/container/ProfileContainer";
import DialogsContainer from "../pages/Dialogs/container/DialogsContainer";

import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.PROFILE} element={<ProfileContainer />} />
      <Route path={ROUTE_NAMES.MESSAGES} element={<DialogsContainer />} />
      <Route path={ROUTE_NAMES.NEWS} element={<div>NEWS</div>} />
      <Route path={ROUTE_NAMES.MUSIC} element={<div>MUSIC</div>} />
      <Route path={ROUTE_NAMES.SETTING} element={<div>SETTING</div>} />
    </Routes>
  );
};

export default Router;
