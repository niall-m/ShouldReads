import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/fontawesome-free-solid';

const Loading = () => (
    <div id="loading">
        <FontAwesomeIcon icon="cogs" size="4x" spin />
    </div>
);

export default Loading;