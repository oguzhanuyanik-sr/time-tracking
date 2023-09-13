import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Card from './index';

interface CardProps {
  data: {
    id: number;
    title: string;
    subtitle: string;
    hour: string;
    last: string;
  };
}

const CardData: CardProps = {
  data: {
    id: 0,
    title: 'Work',
    subtitle: 'Yesterday',
    hour: '12',
    last: '8',
  },
};

describe('images', () => {
  test('image: is length correct?', () => {
    render(<Card {...CardData} />);

    const element = screen.getAllByRole('img');

    expect(element.length).toBe(2);
  });

  test('image: is alt correct? are sizes correct?', () => {
    render(<Card {...CardData} />);

    const element = screen.getByAltText('Icon');
    expect(element).toHaveAttribute('width', '70');
    expect(element).toHaveAttribute('height', '25');

    const element2 = screen.getByAltText('Pattern');
    expect(element2).toHaveAttribute('width', '16');
    expect(element2).toHaveAttribute('height', '5');
  });
});

describe('texts', () => {
  test('title: is correct? is in document?', () => {
    render(<Card {...CardData} />);

    const element = screen.getByText('Work');

    expect(element).toBeInTheDocument();
  });

  test('hours: is correct? is in document?', () => {
    render(<Card {...CardData} />);

    const element = screen.getByText('12hrs');

    expect(element).toBeInTheDocument();
  });

  test('period: is correct? is in document?', () => {
    render(<Card {...CardData} />);

    const element = screen.getByText(/8hrs/i);

    expect(element).toBeInTheDocument();
  });
});

test('snapshot', () => {
  const tree = renderer.create(<Card {...CardData} />).toJSON();

  expect(tree).toMatchSnapshot();
});
