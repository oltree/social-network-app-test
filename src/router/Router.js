import { Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";

import ProfileContainer from "../pages/Profile/container/ProfileContainer";
import DialogsContainer from "../pages/Dialogs/container/DialogsContainer";
import Message from "../pages/Dialogs/components/Message";

import { ROUTE_NAMES } from "./routeNames";
import { allProjectData } from "../static/allProjectData";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<div>HOME</div>} />
      <Route path={ROUTE_NAMES.PROFILE} element={<ProfileContainer />} />
      <Route path={ROUTE_NAMES.MESSAGES} element={<DialogsContainer />}>
        {allProjectData.messagesPage.users.map(({ id, messages }) => (
          <Route
            key={uuid()}
            path={id}
            element={<Message key={uuid()} messages={messages} />}
          />
        ))}
      </Route>
      <Route path={ROUTE_NAMES.NEWS} element={<div>NEWS</div>} />
      <Route path={ROUTE_NAMES.MUSIC} element={<div>MUSIC</div>} />
      <Route path={ROUTE_NAMES.SETTING} element={<div>SETTING</div>} />
    </Routes>
  );
};

export default Router;
