import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


describe('App Component', () => {
  it('renders according to design', () => {
    const component = renderer.create(
      <App />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});