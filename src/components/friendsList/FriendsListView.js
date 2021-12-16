import React from "react";
import { Col, Row } from "reactstrap";
import FriendsListCard from "./FriendsListCard";
import {useFriendsList} from "../providers/FriendsList"

export default function FriendsListView() {
    const friendsList = useFriendsList();

    return <div>
        FRIENDS
        <Row>
            {friendsList.map((friend, index) => { 
                return <Col xs={6}>
                    <FriendsListCard index={index} value={friend} />
                </Col>
            })}
        </Row>
    </div>
}