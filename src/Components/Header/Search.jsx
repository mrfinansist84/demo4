import React, { useState, useEffect } from 'react';
const Search = props => {
  const {allNicknames, currUserNickname, switchToFriendsProfile} = props;
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchResult, setSearchResult] = useState('');

  useEffect(()=>{
    let filteredSearch = [];
    filteredSearch = (allNicknames||[]).filter(nick=>{
      if(nick.nickname!==currUserNickname){ 
        return nick
       }
    });
    setSearchResult(filteredSearch);
  },[props]);

  const handleInputChange = (e) =>{
    setSearchInputValue(e.target.value);

    allNicknames.forEach(user => {
      if (user.nickname === e.target.value){
        switchToFriendsProfile(user.uid);
      }
    });
  }


return (
  <div className='search-container'>
    <input type='text'
    list='search'
    className='search-input' value={searchInputValue} onChange={handleInputChange} />
    
      <datalist id='search'>
      {(searchResult||[]).map((option)=>
        <option value = {option.nickname} key={option.uid}/>
        )}
      
    </datalist>
</div>);
}
  
export default Search;