import React from 'react'

function ErrorText({ error, errType, text }) {
    const errTxt = <small className="text-danger">{text}</small>

    if (error && error.type === errType) {
        return errTxt
    }
    else if (!error && !errType) {
        return errTxt
    }
    return null
}

export default ErrorText
