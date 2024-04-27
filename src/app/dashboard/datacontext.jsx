
'use client';

import { createContext } from 'react';

export const Datacontext = createContext({
    objdata: [],
    loading: true,
});

export const Blogcontext = createContext({
  objdata: [],
  loading: true,
});
