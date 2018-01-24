import React from 'react';
import { Alert } from 'reactstrap';

const Loader = props => {
	return (
		<Alert color="success"> Loading...{' '}<i className="fa fa-spinner" aria-hidden="true"></i> </Alert>
	);
};

export default Loader;