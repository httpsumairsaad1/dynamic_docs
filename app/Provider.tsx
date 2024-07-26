import React, { ReactNode } from 'react'
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense';

const Provider = ({children}: {children: ReactNode}) => {
  return (
    // publicApiKey={"pk_dev_YiSBxbxtr2abzQRXRalrcWqjKzDn6krUQFUkdnFAJ6TLBafeHnj6Rdy0N_EWrmAr"}
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider
