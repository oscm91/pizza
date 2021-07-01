import {
  PAYMENTS_TABLE_FORMAT,
  PAYMENTS_TABLE_FILTER,
  PAYMENTS_TABLE_UPDATE,
} from '../../actions/actionTypes';

export const getpayments = (search, filters) => {
  const action = async (dispatch, getState) => {
    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: {
        data: [],
        normalized: [],
        filtered: [],
      },
    });

    const response = await new Promise((resolve) => {
      setTimeout(() => {
        if (search === 'today') {
          resolve([
            {
              id: 'fake-id-1234',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
          ]);
        }
        if (search === 'week') {
          resolve([
            {
              id: 'fake-id-1234',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-12345',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'external',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-12346',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'datafono',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-12347',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-123478',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-1234789',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-12347890',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
          ]);
        }
        if (search === 'september') {
          resolve([
            {
              id: 'fake-id-1234',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-12345',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'external',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-12346',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'datafono',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-12347',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-123478',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-1234789',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-12347890',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-01234',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-012345',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'external',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-012346',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'datafono',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-012347',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-0123478',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-01234789',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
            {
              id: 'fake-id-012347890',
              created_date: '2021-03-24T14:24:07.719989Z',
              transaction_name: 'Cobro exitoso',
              transaction_id: 'GZEN23784UBV2',
              payment_status: 'started',
              payment_type: 'link',
              payment_method: '**** **** **** 7711',
              payment_value: 25000,
              payment_due: 1500,
            },
          ]);
        }
      }, 100);
    });

    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: {
        data: response,
        normalized: [],
        filtered: [],
      },
    });

    const payments = getState().payments.data;

    dispatch(paymentsTableFormat(payments, filters));
  };
  return action;
};

export const paymentsTableFormat = (payments, filters) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: {
        data: [],
        normalized: [],
        filtered: [],
      },
    });

    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: PAYMENTS_TABLE_FORMAT,
      payload: { payments },
    });
    const newState = await asyncReducer(tempState, {
      type: PAYMENTS_TABLE_FILTER,
      payload: { payments: tempState.payments.normalized, filters },
    });

    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: newState.payments,
    });
  };
  action.worker = true;

  return action;
};

export const paymentsTableFilter = (payments, filters) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: {
        ...payments,
        filtered: [],
      },
    });
    const asyncReducer = await getAsyncReducer();
    const result = await asyncReducer(getState(), {
      type: PAYMENTS_TABLE_FILTER,
      payload: { payments, filters },
    });

    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: result.payments,
    });
  };
  action.worker = true;

  return action;
};
