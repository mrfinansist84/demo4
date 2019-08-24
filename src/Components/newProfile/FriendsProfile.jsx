import React, { useEffect, useState } from 'react';
import { ProfileField } from './ProfileField';
import Chart from '../Chart/Chart';
import Header from '../../Modules/Header/MainHeader';
import ProfileImage from './ProfileImage';

import './Profile.scss';

const FriendsProfile = props => {
    console.log('friends profile', props);
    const {
        pathname,
        loadFriendsInfo,
        friendsWheel='',
        friendsName,
        friendsAge,
        friendsNickname,
        friendsImage,
        saveNewProfileField
    } = props;
    
    let friendsUid = pathname.replace(`\/friend\/`, '');
    useEffect(()=>{ 
            const uid = pathname.replace(`\/friend\/`, '');
            loadFriendsInfo(uid);
        
    }, [pathname]);

    
    const userDate = new Date(Number(friendsUid)).toLocaleDateString('en-US');
    const [profilePic, setProfilePic] = useState();
    const [profileName, setProfileName] = useState(friendsName);
    const [profileAge, setProfileAge] = useState(friendsAge);
    const [profileNickname, setProfileNickname] = useState(friendsNickname);
    const [profileWheel, setProfileWheel] = useState(friendsWheel);

    useEffect(() => {
        setProfilePic(friendsImage);
        setProfileName(friendsName);
        setProfileAge(friendsAge);
        setProfileNickname(friendsNickname);
        setProfileWheel(friendsWheel);
    }, [props]);

   
        const labelsList = Object.keys(profileWheel);
        const series = Object.values(profileWheel);
        const options = {
            labels: labelsList
        };

    return (
        <div>
        <div className='ProfileWrapper-flex'>
          <Header />
          <div className="ProfilePageWrapper">
              <div className="ProfilePage">
                { <Chart options={options} series={series} /> }

                  <div className="info-column">
                     
                      <h1>My Wheel Of Life Profile</h1>
                      <ProfileImage imgSrc={friendsImage} editable={false} />
                      
                      <ProfileField fieldName="Name" value={profileName} editable={false} saveNewProfileField={saveNewProfileField} />
                      <ProfileField fieldName="Age" value={profileAge} editable={false} saveNewProfileField={saveNewProfileField} />
                      <ProfileField fieldName="Nickname" value={profileNickname} editable={false} saveNewProfileField={saveNewProfileField} />
                      <ProfileField
                          fieldName="Registration Date" editable={false}
                          value={userDate}
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

 export default FriendsProfile;
