import React from 'react';
import renderer from 'react-test-renderer';

import CoursesList from '.';

jest.mock('../CourseCard', () => 'CourseCard');

const mockCourses = [
    {
        _id: 'id',
        name: 'name',
        startDate: '',
        categories: ['c1', 'c2']
    },
    {
        _id: 'id',
        name: 'name2',
        startDate: '',
        categories: ['c4', 'c5']
    }
]

describe('CoursesList Component', () => {
    it('renders according to design', () => {
        const component = renderer.create(
            <CoursesList courses={mockCourses} />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});