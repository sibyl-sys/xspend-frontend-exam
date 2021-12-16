import React, {useState} from "react";
import { Col, Container, Row } from "reactstrap";
import FriendsListCard from "./FriendsListCard";

export default function FriendsListView() {
    return <div>
        FRIENDS
        <Row>
            <Col xs={6}>
                <FriendsListCard />
            </Col>
            <Col xs={6}>
                <FriendsListCard />
            </Col>
            <Col xs={6}>
                <FriendsListCard />
            </Col>
        </Row>
    </div>
}