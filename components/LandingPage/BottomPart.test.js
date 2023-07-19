import React from 'react';
import { render, waitFor} from '@testing-library/react';
import axios from 'axios';
import BottomPart from './BottomPart';

jest.mock('axios');

describe('BottomPart Component', () => {
  const mockedResponse = {
    data: [
      {
        operation: {
          type: 'transaction',
          parameter: {
            value: {
              ong_name: 'WWF',
            },
          },
        },
      },
      {
        operation: {
          type: 'transaction',
          parameter: {
            value: {
              ong_name: 'Action Against Hunger',
            },
          },
        },
      },
      {
        operation: {
          type: 'transaction',
          parameter: {
            value: {
              ong_name: 'AIDS',
            },
          },
        },
      },
    ],
  };

  beforeEach(() => {
    axios.get.mockResolvedValue(mockedResponse);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('should render Wildians components with correct props', async () => {
    // Render the BottomPart component
    const {getByText } = render(<BottomPart />);

    // Wait for the component to update with the mocked data
    await waitFor(() => {
      // Assert that the Wildians components are rendered with the correct props
      const deerWildians = getByText('Deer_3D');
      expect(deerWildians).toBeInTheDocument();

      // Assert other Wildians components with their respective props
      const wolfWildians = getByText('Wolf_3D');
      expect(wolfWildians).toBeInTheDocument();

      const bullWildians = getByText('Bull_3D');
      expect(bullWildians).toBeInTheDocument();

      // Add more assertions for other Wildians components if needed
    });
  });
});
