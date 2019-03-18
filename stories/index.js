import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AuditReadyList from '../src/pages/AuditReadyList';
import HelpCenter from '../src/pages/HelpCenter';

storiesOf('Button', module)
    .add('with text', () => (
        <button onClick={action('clicked')}>Hello Button</button>
    ))
    .add('with some emoji', () => (
        <button onClick={action('clicked')}>�� �� �� ��</button>
    ));

storiesOf('AuditReadyList', module)
    .add('show AuditReadyList', () => (
        <AuditReadyList title="AuditReadyList" />
    ));

storiesOf('HelpCenter', module)
    .add('show HelpCenter', () => (
        <HelpCenter title="HelpCenter" />
    ))
    .add('with some emoji', () => (
        <HelpCenter title="HelpCenter" />
    ));
