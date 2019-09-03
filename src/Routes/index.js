import React from 'react'
import { Route, Switch } from 'react-router'
import Start from '../Components/StartingPage/Start.js';
import Goal from '../Modules/Goal/MainGoal';
import ControllerAdminPage from '../Components/AdminPage/ControllerAdminPage.js';
import NotFound from '../Components/NotFound/NotFound';
import Form from '../Modules/Login/Auth';
import Quiz from '../Modules/Quiz/LoadQuiz';
import MainProfile from '../Modules/Profile/MainProfile';
import FriendsProfile from '../Modules/FriendsProfile/MainFriendsProfile';
import { PrivateRoute } from '../Utils/PrivateRoute';
import BigGoal from '../Modules/BigGoal/MainBigGoal';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route path="/login" component={Form} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/signup" component={Form} />
      <Route path="/signin" component={Form} />
      <Route path="/friend/:id" component={FriendsProfile} />
      <PrivateRoute path="/myProfile" component={MainProfile} />
      <PrivateRoute path="/weekly_goal"
        component={Goal} />
      <PrivateRoute
        path="/monthly_goal"
        component={Goal} />
      <PrivateRoute path="/annual_goal"
        component={Goal} />
      <PrivateRoute path="/bigGoal" component={BigGoal} />
      <Route path="/adminPage" component={ControllerAdminPage} />
      <Route path="/404" component={NotFound} />
      <Route path="/*" component={NotFound} />

    </Switch>
  </div>
)

export default routes
