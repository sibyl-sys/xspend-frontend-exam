import React, {useState} from "react";
import { Form, FormGroup, Input, Col, Button, FormFeedback } from "reactstrap"
import { useFriendsListUpdate, useFriendsList } from "../providers/FriendsList";


export default function UpdateFriendForm (props) {

    const [name, setName] = useState(props.name);
    const [wallet, setWallet] = useState(props.wallet);
    const [email, setEmail] = useState(props.email);
    const [errors, setErrors] = useState({});
    const friendListUpdate = useFriendsListUpdate();
    const friendsList = useFriendsList();


    function handleSubmit(event) {
        event.preventDefault();
        friendListUpdate(props.index, {
            "name": name,
            "wallet": wallet,
            "email": email
        });
        props.toggle();
    }

    function handleNameChange(event) {
        setName(event.target.value);
    } 
    
    function handleWalletChange(event) {
        setWallet(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function validateWalletChange() {
        setErrors({
            ...errors,
            "wallet" : !(/^(0x){1}[0-9a-fA-F]{40}$/i.test(wallet))
        });
    }
    
    function validateEmailChange() {
        setErrors({
            ...errors,
            "email" : !email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        });
    }




    return <div>
        FORM 
        <Form className="mt-2" onSubmit={handleSubmit}>
            <FormGroup row>
                <Col>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col>
                    <Input
                        id="wallet"
                        name="wallet"
                        placeholder="Wallet Address"
                        value={wallet}
                        onChange={handleWalletChange}
                        onBlur={validateWalletChange}
                        invalid={errors["wallet"]}
                    />
                    <FormFeedback>
                        Please input valid Ethereum wallet address.
                    </FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={validateEmailChange}
                        invalid={errors["email"]}
                    />
                    <FormFeedback>
                        Please input valid email.
                    </FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col className="d-grid">
                    <Button
                        color="primary"
                        disabled={(!wallet && errors)}
                    >
                        Update Account
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    </div>

}