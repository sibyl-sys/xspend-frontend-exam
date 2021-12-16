import React, {useState} from "react";
import { Button, Card, CardSubtitle, CardTitle, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export default function FriendsListCard(props) {
    return <Card className="mt-2 p-2">
        <CardTitle className="d-flex justify-content-between" tag="h5">
            {props.value.name} 
            <UncontrolledDropdown>
                <DropdownToggle data-toggle="dropdown" tag="span">
                    <i className="bi bi-three-dots-vertical"></i>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>Update</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
        >
            <small>{props.value.wallet}<br/>
            {props.value.email}
            </small>
        </CardSubtitle>
    </Card>
}