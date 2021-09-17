import React, { useCallback } from 'react';
import { Pages } from '@stepform/ui';
import { facade } from '@stepform/store';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const paymentsFacade = facade.paymentsFacade();

  const history = useHistory();
  const historyFacade = useCallback(() => {
    return {
      goTo: (location) => history.push(location),
      getPathname: history.location.pathname || '',
    };
  }, [history]);

  return <Pages.Dashboard facade={paymentsFacade} history={historyFacade()} />;
}

export default Dashboard;
