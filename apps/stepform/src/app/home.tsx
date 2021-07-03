import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react';
import { Pages } from '@stepform/ui';
import { facade } from '@stepform/store';
import { useHistory } from 'react-router-dom';

function Home() {
  const paymentsFacade = facade.productsFacade();

  const history = useHistory();
  const historyFacade = useCallback(() => {
    return {
      goTo: (location) => history.push(location),
      getPathname: history.location.pathname || '',
    };
  }, [history]);

  return <Pages.Home facade={paymentsFacade} history={historyFacade()} />;
}

export default Home;
