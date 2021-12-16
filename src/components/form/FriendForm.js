import React, {useContext, useState} from "react";
import { Container, Form, FormGroup, Input, Col, Row, Button } from "reactstrap"

export default function FriendForm () {
    return <Container 
        className="mt-5"
    >
        <Row className="justify-content-md-center  ">
            <Col sm={6} className="bg-light border p-3">
                FORM 
                <Form className="mt-2">
                    <FormGroup row>
                        <Col>
                            <Input
                                id="name"
                                name="name"
                                placeHolder="Name"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Input
                                id="wallet"
                                name="wallet"
                                placeHolder="Wallet Address"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Input
                                id="email"
                                name="email"
                                placeHolder="Email"
                                type="email"
                            />
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