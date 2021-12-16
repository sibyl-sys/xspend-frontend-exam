import React, {useState} from "react";
import { Container, Form, FormGroup, Input, Col, Row, Button, FormFeedback } from "reactstrap"
import { useFriendsListAdd, useFriendsList } from "../providers/FriendsList";


export default function FriendForm () {

    const [name, setName] = useState("");
    const [wallet, setWallet] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const friendListAdd = useFriendsListAdd();
    const friendsList = useFriendsList();

    console.log(friendsList);

    function handleSubmit(event) {
        event.preventDefault();
        friendListAdd({
            "name": name,
            "wallet": wallet,
            "email": email
        });
        setEmail("");
        setName("");
        setWallet("");
        setErrors({});
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
        console.log(errors);
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
                        Add Account
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    </div>

}