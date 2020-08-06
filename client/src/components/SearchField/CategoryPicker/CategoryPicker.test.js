import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import CategoryPicker from './';

Enzyme.configure({ adapter: new Adapter() })

const setCategories = jest.fn();

describe('CategoryPicker Component', () => {
    describe('Rendering', () => {
        it('renders according to design', () => {
            const component = renderer.create(
                <CategoryPicker setCategories={setCategories} />
            );
            const tree = component.toJSON();

            expect(tree).toMatchSnapshot();
        });
    });

    describe('Integration', () => {
        describe('when a category is selected', () => {
            let wrapper
            beforeEach(() => {
                wrapper = shallow(<CategoryPicker callback={setCategories} />);

            });

            it('#setCategories callback gets called', () => {
                wrapper.find('input').first().simulate('click', { target: { name: 'c1' } });
                expect(setCategories).toHaveBeenCalled();
            });
        });
    });
});
