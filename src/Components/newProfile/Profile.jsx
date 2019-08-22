import React, { useEffect, useState } from 'react';
import { ProgressPopUp } from './ProgressPopUp';
import { ProfileField } from './ProfileField';
import Chart from '../Chart/Chart';
import Header from '../../Modules/Header/MainHeader';
import ProfileImage from './ProfileImage';

import './Profile.scss';
import store from '../../store';

const NewProfile = props => {
    console.log('props', props)
    const {
        getUserDataProfile,
        wheels = '',
        userProgressData = '',
        userName,
        userAge,
        userNickname,
        userImage,
        setProfilePicture,
        saveNewProfileField,
        allNicknames,
        setData
    } = props;

    const labelsList = Object.keys(wheels);
    const series = Object.values(wheels);
    const options = {
        labels: labelsList
    };
    const userDate = new Date(
        JSON.parse(localStorage.getItem('userId'))
    ).toLocaleDateString('en-US');
    
    const [profilePic, setProfilePic] = useState();
    const [profileName, setProfileName] = useState(userName);
    const [profileAge, setProfileAge] = useState(userAge);
    const [profileNickname, setProfileNickname] = useState(userNickname);
    

    useEffect(() => {
        const token = localStorage.getItem('userId');
        if (!store.getState().wheels && !wheels) {
            getUserDataProfile(token, setData);
        }
    },[]);

    useEffect(() => {
        setProfilePic(userImage);
        setProfileName(userName);
        setProfileAge(userAge);
        setProfileNickname(userNickname);
    }, [props]);

    
    return (
        <div>
        <div className='ProfileWrapper-flex'>
          <Header nicknames={allNicknames} userNickname={userNickname}/>
          <div className="ProfilePageWrapper">
              {userProgressData && (
              <ProgressPopUp userProgressData={userProgressData} />
                )}
              <div className="ProfilePage">
                <Chart options={options} series={series} />

                  <div className="info-column">
                     
                      <h1>My Wheel Of Life Profile</h1>
                      <ProfileImage imgSrc={profilePic} 
                                    setProfilePicture={setProfilePicture} 
                                    editable={true}/>
                      <ProfileField fieldName="Name" value={profileName} editable={true} saveNewProfileField={saveNewProfileField} />
                      <ProfileField fieldName="Age" value={profileAge} editable={true} saveNewProfileField={saveNewProfileField} />
                      <ProfileField fieldName="Nickname" value={profileNickname} editable={true} saveNewProfileField={saveNewProfileField} />
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


export default NewProfile;