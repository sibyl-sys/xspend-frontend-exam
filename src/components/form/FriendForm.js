import React, {useContext, useState} from "react";
import { Container, Form, FormGroup, Input, Col, Row, Button, FormFeedback } from "reactstrap"



export default function FriendForm () {

    const [name, setName] = useState("");
    const [wallet, setWallet] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});


    function handleSubmit(event) {
        event.preventDefault();
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
    
    function validateEmailChange() {
        setErrors({
            "email" : !email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        });
    }




    return <Container 
        className="mt-5"
    >
        <Row className="justify-content-md-center  ">
            <Col sm={6} className="bg-light border p-3">
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
                                invalid={errors["wallet"]}
                            />
                            <FormFeedback>
                                Please input valid Etherium address.
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
                            >
                                Add Account
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
        
    </Container>

}