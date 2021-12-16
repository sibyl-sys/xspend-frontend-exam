import React, { useState } from "react";
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import FriendsListCard from "./FriendsListCard";
import {useFriendsList} from "../providers/FriendsList"
import UpdateFriendForm from "../form/UpdateFriendForm";

export default function FriendsListView() {
    const friendsList = useFriendsList();
    const [modal, setModal] = React.useState(false);
    const [updateIndex, setUpdateIndex] = React.useState(0);
    const toggle = () => setModal(!modal);

    const onUpdate = (index) => () => {
        setUpdateIndex(index);
        setModal(true);
    }

    return <div>
        FRIENDS
        <Row>
            {friendsList.map((friend, index) => { 
                return <Col xs={6}>
                    <FriendsListCard index={index} value={friend} onUpdate={onUpdate} />
                </Col>
            })}
        </Row>
        <Modal
            backdrop={true}
            isOpen={modal}
            toggle={toggle}
        >
            <ModalHeader toggle={toggle}>
            Update Form
            </ModalHeader>
            <ModalBody>
                <UpdateFriendForm name={friendsList[updateIndex]?.name || ""} wallet={friendsList[updateIndex]?.wallet || ""} email={friendsList[updateIndex]?.email || ""} index={updateIndex} toggle={toggle}/>
            </ModalBody>
        </Modal>
    </div>
}