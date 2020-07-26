import React from 'react';
import renderer from 'react-test-renderer';

import SearchField from './';


describe('SearchField Component', () => {
    it('renders according to design', () => {
        const component = renderer.create(
            <Header />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});