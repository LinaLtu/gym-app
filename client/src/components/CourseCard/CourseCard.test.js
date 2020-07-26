import React from 'react';
import renderer from 'react-test-renderer';

import CourseCard from '.';

describe('CourseCard Component', () => {
    it('renders according to design', () => {
        const component = renderer.create(
            <CourseCard />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});