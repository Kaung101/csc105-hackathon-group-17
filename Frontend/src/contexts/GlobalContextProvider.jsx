import { useMemo, useState } from 'react';

import GlobalContext from './GlobalContext';

export default function GlobalContextProvider(props) {
  const [user, setUser] = useState('');
  const [status, setStatus] = useState('');
  // hard-coded initial state for testing
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       title: 'There is no spoon',
//       description: 'All your base are belong to us',
//     },
//     {
//       id: 2,
//       title: 'Greed is good',
//       description: 'Somebody set us up the bomb',
//     },
//   ]);

  const globalState = useMemo(() => {
    return {
      user,
      setUser,
      status,
      setStatus,
    };
  }, [user, status]);

  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  );
}
