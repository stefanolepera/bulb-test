import axios from 'axios';
import fetchData from '../Network';

jest.mock(axios);

describe('Network test', () => {
  it('fetchData should call Axios', () => {
    fetchData('someUrl');
    expect(axios.mock.calls).toBeGreaterThan(0);
  });
});
