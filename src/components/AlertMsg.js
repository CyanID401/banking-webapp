import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

function AlertMsg({ msg, type }) {
    const [show, setShow] = useState(true)
    if (type === 'error') {
        return(
            show &&
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>There was an error...</Alert.Heading>
                <p>Error Message: {msg}</p>
            </Alert>
        )
    }
    else
        return (
            <Alert variant="success" >
                <Alert.Heading>Success!</Alert.Heading>
                <p>Successfully {msg}.</p>
            </Alert>
        )
}

export default AlertMsg