import React from 'react';
import renderer from 'react-test-renderer';
import reactRouterDom from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import CourseCard from '.';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({ useHistory: jest.fn() }));

const mockCourse = {
    _id: 'id',
    name: 'name',
    startDate: '',
    categories: ['c1', 'c2']
};

describe('CourseCard Component', () => {
    const pushMock = jest.fn();

    beforeEach(() => {
        reactRouterDom.useHistory.mockImplementation(() => ({
            push: pushMock
        }));
    });

    it('renders according to design', () => {
        const component = renderer.create(
            <CourseCard course={mockCourse} />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    describe('#handleOnClick', () => {
        let wrapper

        beforeEach(() => {
            wrapper = shallow(<CourseCard course={mockCourse} />);
        });

        it('#setCategories callback gets called', () => {
            wrapper.find('.course-card').simulate('click');
            expect(pushMock).toHaveBeenCalled();
        });
    });
});