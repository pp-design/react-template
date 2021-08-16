import React, { useEffect } from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [props.location.pathname]);

	return (
		<div className="layout">
			<div className="layout-header">
				<Header {...props} />
			</div>
			<div className="layout-body">{props.children}</div>
			<div className="layout-footer">
				<Footer {...props} />
			</div>
		</div>
	);
};
