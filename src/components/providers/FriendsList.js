import React, {useContext, useState} from "react";

const FriendsListContext = React.createContext([]);
const FriendsListAddContext = React.createContext(friend => () => {
    console.log("Add " + friend.name + " to friendslist!")
});
const FriendsListUpdateContext = React.createContext((index, friend) => () => {
    console.log("Updated index " + index + " of friendslist!")
});
const FriendDeleteContext = React.createContext((index) => () => {
    console.log("Friend at index " + index + " deleted!")
});

export function useFriendsList() {
    return useContext(FriendsListContext);
}

export function useFriendsListAdd() {
    return useContext(FriendsListAddContext);
}

export function useFriendsListUpdate() {
    return useContext(FriendsListUpdateContext);
}

export function useFriendsListDelete() {
    return useContext(FriendDeleteContext);
}

export function FriendsListProvider ({children}) {
    const [friendsList, setFriendsList] = useState(
        JSON.parse(window.localStorage.getItem("ETHFriendList"), []) || []
    );

    const addFriend = friend => {
        const updatedFriendsList = [...friendsList, friend];
        setFriendsList(updatedFriendsList);
        window.localStorage.setItem("ETHFriendList", JSON.stringify(updatedFriendsList));
    } 

    const deleteFriend = (index) => () => {
        const updatedFriendsList = [...friendsList];
        updatedFriendsList.splice(index, 1);
        setFriendsList(updatedFriendsList);
        window.localStorage.setItem("ETHFriendList", JSON.stringify(updatedFriendsList));
    } 
    
    const updateFriend = (index, friend) => {
        console.log(friend);
        const updatedFriendsList = [...friendsList];
        updatedFriendsList[index] = friend;
        setFriendsList(updatedFriendsList);
        window.localStorage.setItem("ETHFriendList", JSON.stringify(updatedFriendsList));
    }
    return (
        <FriendsListContext.Provider value={friendsList}>
            <FriendsListAddContext.Provider value={addFriend}>
                <FriendDeleteContext.Provider value={deleteFriend}>
                    <FriendsListUpdateContext.Provider value={updateFriend}>
                        {children}
                    </FriendsListUpdateContext.Provider>
                </FriendDeleteContext.Provider>
            </FriendsListAddContext.Provider>
        </FriendsListContext.Provider>
    )
}