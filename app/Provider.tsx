import React, { createContext, ReactNode } from 'react';

import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense';
import Loader from '@/components/Loader';

const Provider = ({children}: {children: ReactNode}) => {
  return (
    // publicApiKey={"pk_dev_YiSBxbxtr2abzQRXRalrcWqjKzDn6krUQFUkdnFAJ6TLBafeHnj6Rdy0N_EWrmAr"}
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider
