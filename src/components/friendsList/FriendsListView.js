import React, { useState } from "react";
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import FriendsListCard from "./FriendsListCard";
import {useFriendsList} from "../providers/FriendsList"

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
        </Modal>
    </div>
}