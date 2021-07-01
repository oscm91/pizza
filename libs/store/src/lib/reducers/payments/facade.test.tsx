import React from 'react';
import useFilling from './facade';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import reducer from '../payments/reducer';

jest.mock('../../worker/rootAsyncReducer', () => {
  return () => {
    return Promise.resolve((a, b) => {
      return {
        payments: reducer(a, b),
      };
    });
  };
});

import { getStore } from '../../store';

describe('payments reducer', () => {
  it('should get payments', async () => {
    const store: Store<any, any> = getStore({
      payments: {},
    });
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result, waitForNextUpdate } = renderHook(() => useFilling(), {
      wrapper,
    });

    act(() => {
      result.current.getData("week");
    });

    await waitForNextUpdate();

    expect(
      result.current.getState().filtered.map((payments) => payments.id)
    ).toEqual([ 'fake-id-1234',
      'fake-id-12345',
      'fake-id-12346',
      'fake-id-12347',
      'fake-id-123478',
      'fake-id-1234789',
      'fake-id-12347890' ]);
  });
});
