import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Pages } from '@stepform/ui';
import { facade } from '@stepform/store';

function App() {
  const paymentsFacade = facade.paymentsFacade();

  return <Pages.Home facade={paymentsFacade}></Pages.Home>;
}

export default App;
