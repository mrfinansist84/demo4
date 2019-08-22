import React, { useEffect, useState } from 'react';
import './Profile.scss';
const defaultImg = require('./defaultImg.png');

const ProfileImage = props => {
    const { editable, imgSrc, setProfilePicture } = props;
    const [profilePic, setProfilePic] = useState(defaultImg);
    const [imgFile, setImgFile] = useState('');
    const [bufferPic, setBufferPic] = useState();
    useEffect(() => {
        setProfilePic(imgSrc || defaultImg);
    }, [props]);

    const handleImageChange = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setBufferPic(profilePic);
            setProfilePic(reader.result);
            setImgFile(file);
        };
        reader.readAsDataURL(file);
    };

    const savePicture = () => {
        const uid = JSON.parse(localStorage.getItem('userId'));
        setProfilePicture(uid, imgFile);
    };

    const cancelPicture = () => {
        setProfilePic(bufferPic);
    };

    const imgImmutable = () => {
        return (<img className='preview-profile-pic' src={profilePic} />);
    }
    const imgMutable = () => {
        return (
        <div>
          <img className='preview-profile-pic' src={profilePic} />
          <input type='file' accept="image/*" onChange={(e)=>handleImageChange(e)} />
                <button
                    onClick={savePicture}
                    className="ProfileField-button ProfileField-button-save"
                >Save</button>
                <button
                      onClick={cancelPicture}
                    className="ProfileField-button ProfileField-button-cancel"
                >Cancel</button>
            </div>
        );
    };

    return editable ? imgMutable() : imgImmutable();
};

export default ProfileImage;
