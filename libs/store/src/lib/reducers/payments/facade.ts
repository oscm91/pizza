import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentsTableFilter, getpayments } from './actions';

export default () => {
  const payments = useSelector((state) => state['payments']);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('today');
  const [filters, setFilters] = useState([]);
  const [total, setTotal] = useState([]);

  return {
    getSearch: () => search,
    setSearch: (value) => setSearch(value),
    checkFilter: (nameFilter) => {
      return filters.includes(nameFilter);
    },
    setFilters: (nameFilter, value) => {
      if (value) {
        setFilters(Array.from(new Set([].concat(nameFilter, filters))));
      } else {
        setFilters(
          Array.from(new Set([].concat(nameFilter, filters))).filter(
            (filter) => filter !== nameFilter
          )
        );
      }
    },
    getData: (search) => {
      dispatch(getpayments(search, filters));
    },
    filter: () => {
      dispatch(paymentsTableFilter(payments.normalized, filters));
    },
    getState: () => payments,
    getTotal: () => total,
    setTotal: () => setTotal,
  };
};
