const redirectToFriendsProfile = (uid) => ({
    type: 'REDIRECT_TO_FRIENDS_PROFILE', 
    uid: uid
});


const sendFriendsInfoToStore = (friendsInfo) => ({
  type: 'SEND_FRIENDS_INFO_TO_STORE', 
  friendsImage: friendsInfo.userImage,
  friendsName: friendsInfo.userName,
  friendsAge: friendsInfo.userAge,
  friendsNickname: friendsInfo.userNickname,
  friendsUid: friendsInfo.uid
});

export {
  redirectToFriendsProfile,
  sendFriendsInfoToStore
};