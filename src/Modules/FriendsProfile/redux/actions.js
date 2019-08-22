const getFriendsInfo = (uid) => ({
  type: 'GET_FRIENDS_INFO', 
  friendUID: uid
});

const loadFriendsInfoToStore = (friendsInfo) => ({
  type: 'LOAD_FRIENDS_INFO_TO_STORE', 
  friendsImage: friendsInfo.userImage,
  friendsName: friendsInfo.userName,
  friendsAge: friendsInfo.userAge,
  friendsNickname: friendsInfo.userNickname,
  wheel: friendsInfo.wheel
});

const loadFriendsWheelToStore = (friendsWheel) => ({
  type: 'LOAD_FRIENDS_WHEEL_TO_STORE', 
  friendsWheel: friendsWheel
});

export { getFriendsInfo, loadFriendsInfoToStore, loadFriendsWheelToStore };