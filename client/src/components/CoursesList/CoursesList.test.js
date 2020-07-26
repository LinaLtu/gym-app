import React from 'react';
import renderer from 'react-test-renderer';

import CoursesList from '.';

jest.mock('../CourseCard', () => 'CourseCard');

describe('CoursesList Component', () => {
    it('renders according to design', () => {
        const component = renderer.create(
            <CoursesList />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});