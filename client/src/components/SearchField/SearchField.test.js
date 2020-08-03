import React from 'react';
import renderer from 'react-test-renderer';

import SearchField from './';

jest.mock('./DatePicker', () => 'SearchDatePicker');
jest.mock('./CategoryPicker', () => 'CategoryPicker');


describe('SearchField Component', () => {
    it('renders according to design', () => {
        const component = renderer.create(
            <SearchField />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});