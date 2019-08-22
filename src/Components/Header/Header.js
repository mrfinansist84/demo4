import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Search from './Search';
import './Header.scss';
 

const Header = props => {
  const { nicknames, userNickname, signOut, switchToFriendsProfile } = props;
  const [showHeader, setHeaderState] = useState(true);

  const logout = () => {
    localStorage.clear();
    signOut();
  }
  const handleHeaderSwitch = () => setHeaderState(!showHeader);
  const FullHeader = () => {
    const fullHeaderTitles = [
      {title: 'My Profile', adress: `/myProfile`},
      {title: 'Weekly Goal', adress: `/weekly_goal`},
      {title: 'Monthly Goal', adress: `/monthly_goal`},
      {title: 'Annual Goal', adress: `/annual_goal`},
      {title: 'Big Goal', adress: `/bigGoal`}
  ];
    return(
    <header className="container-header">
    <span className="link-header icon-bars" onClick={handleHeaderSwitch}>
    <FontAwesomeIcon icon="bars" />
      </span>
      {fullHeaderTitles.map(title=>
       <Link className="link-header" to= {title.adress}>
          <span key={title.title}>{title.title}</span>
       </Link>
        )}
   
    <Link
      className="link-header"
      onClick={logout}
      to={`/`}
    >
      <span>Sign Out</span>
      
    </Link>
    <Search allNicknames={nicknames} currUserNickname={userNickname} switchToFriendsProfile={switchToFriendsProfile}/>
  </header>
    )}

  const CollapsedHeader = () => {

    const collapsedHeaderTitles = [
        {title: 'Weekly', adress: `/weekly_goal`},
        {title: 'Monthly', adress: `/monthly_goal`},
        {title: 'Annual', adress: `/annual_goal`},
        {title: 'Big', adress: `/bigGoal`}
    ];
    return(
      <header className="collapsed-container-header">
      <span className="collapsed-link-header icon-bars" 
      onClick={handleHeaderSwitch}>
       
        <FontAwesomeIcon icon="bars" />
        </span>
      <Link className="collapsed-link-header" to={`/myProfile`}>
      <FontAwesomeIcon icon={faUser}  />
      </Link>

      {collapsedHeaderTitles.map(title=>
       <Link className="collapsed-link-header" to= {title.adress}>
       <span key={title.title}>{title.title}</span>
     </Link>
        )}
      <Link
        className="collapsed-link-header"
        onClick={logout}
        to={`/`}
      >
        <FontAwesomeIcon icon={['fas', 'sign-out-alt']}  />
      </Link>
    </header>
    )
  }
  
  return showHeader ? FullHeader()  : CollapsedHeader();
};

  export default Header;
 


