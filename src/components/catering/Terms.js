import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Terms() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Terms and Conditions
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        By booking our catering service, you agree to the following terms and conditions:
                    </p>
                    <ul>
                        <li>You have until 1 week before the booked date to cancel the booking.</li>
                        <li>Any cancellations made after this period will not be refunded.</li>
                        <li>We reserve the right to make changes to the menu based on availability of ingredients.</li>
                        <li>Allergies and dietary restrictions must be communicated at the time of booking.</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}