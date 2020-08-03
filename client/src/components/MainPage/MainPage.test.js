import React from 'react';
import renderer from 'react-test-renderer';

import MainPage from './';

jest.mock('../Header', () => 'Header');
jest.mock('../SearchField', () => 'SearchField');
jest.mock('../CoursesList', () => 'CoursesList');
jest.mock('../Paginator', () => 'Paginator');


describe('MainPage Component', () => {
    it('renders according to design', () => {
        const component = renderer.create(
            <MainPage />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});