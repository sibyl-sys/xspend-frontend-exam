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
        JSON.parse(window.localStorage.getItem("ETHFriendsList"), [])
    );

    const addFriend = friend => {
        const updatedFriendsList = [...friendsList, friend];
        setFriendsList(updatedFriendsList);
        window.localStorage.setItem("ETHFriendsList", JSON.stringify(updatedFriendsList));
    } 

    const deleteFriend = (index, friend) => {
        const updatedFriendsList = [...friendsList];
        updatedFriendsList.splice(index, 1);
        setFriendsList(updatedFriendsList);
        window.localStorage.setItem("ETHFriendsList", JSON.stringify(updatedFriendsList));
    } 
    
    const updateFriend = (index, friend) => {
        const updatedFriendsList = [...friendsList];
        updatedFriendsList[index] = friend;
        setFriendsList(updatedFriendsList);
        window.localStorage.setItem("ETHFriendsList", JSON.stringify(updatedFriendsList));
    }
    return (
        <FriendsListContext.Provider value={friendsList}>
            <FriendsListAddContext.Provider value={addFriend}>
                <FriendsListUpdateContext.Provider value={deleteFriend}>
                    <FriendDeleteContext.Provider value={updateFriend}>
                        {children}
                    </FriendDeleteContext.Provider>
                </FriendsListUpdateContext.Provider>
            </FriendsListAddContext.Provider>
        </FriendsListContext.Provider>
    )
}