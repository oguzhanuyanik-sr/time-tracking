import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Profile from './index';

describe('avatar image', () => {
  test('image: is in document? is visible?', () => {
    render(<Profile />);

    const element = screen.getByRole('img');

    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('image: is alt correct?', () => {
    render(<Profile />);

    const element = screen.getByAltText('Avatar');

    expect(element).toHaveAttribute('width', '78');
    expect(element).toHaveAttribute('height', '78');
  });

  test('image: is src correct?', () => {
    render(<Profile />);

    const element = screen.getByAltText('Avatar');

    expect(element).toHaveAttribute(
      'src',
      expect.stringMatching(/image-jeremy.png/i)
    );
  });
});

describe('titles', () => {
  test('subtitle: is in document? is visible? is text correct?', () => {
    render(<Profile />);

    const element = screen.getByText('Report for');

    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('title: is in document? is text correct?', () => {
    render(<Profile />);

    const element = screen.getByRole('heading', {
      level: 1,
      name: 'Jeremy Robson',
    });

    expect(element).toBeInTheDocument();
  });
});

describe('nav', () => {
  test('list: is length correct?', () => {
    render(<Profile />);

    const element = screen.getByRole('list');

    expect(element.childNodes.length).toBe(3);
  });
});

test('snapshot', () => {
  const tree = renderer.create(<Profile />).toJSON();

  expect(tree).toMatchSnapshot();
});
