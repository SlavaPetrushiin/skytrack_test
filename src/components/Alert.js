import React from 'react';
import Alert from '@material-ui/lab/Alert';

const AlertError = (props) => {
    return (
        <Alert severity="error">{props.errorMessage}</Alert>
    );
};

export default AlertError;