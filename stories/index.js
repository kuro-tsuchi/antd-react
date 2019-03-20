import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Provider} from 'react-redux';
import AuditReadyList from '../src/pages/AuditReadyList';
import HelpCenter from '../src/pages/HelpCenter';
import configureStore from '../src/redux/store';
const store = configureStore();

storiesOf('Button', module)
    .add('with text', () => <button onClick={action('clicked')}>Hello Button</button>)
    .add('with some emoji', () => <button onClick={action('clicked')}>�� �� �� ��</button>);

storiesOf('HelpCenter', module)
    .add('show HelpCenter', () => <HelpCenter title="HelpCenter" />)
    .add('with some emoji', () => <HelpCenter title="HelpCenter" />);

storiesOf('AuditReadyList', module)
    .addDecorator(story => <Provider store={store}>{story()} </Provider>)
    .add('all', () => <AuditReadyList />);
