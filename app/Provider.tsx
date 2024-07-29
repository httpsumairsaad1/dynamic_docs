'use client'

import React, { createContext, ReactNode } from 'react';
import { getClerkUsers } from '@/lib/actions/user.actions';
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense';
import Loader from '@/components/Loader';
import { RoomProvider } from "@liveblocks/react";

const Provider = ({children}: {children: ReactNode}) => {
  return (
    // publicApiKey={"pk_dev_YiSBxbxtr2abzQRXRalrcWqjKzDn6krUQFUkdnFAJ6TLBafeHnj6Rdy0N_EWrmAr"}
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth" resolveUsers={async({ userIds }) => {
      const users = await getClerkUsers({userIds});
      return users;
    }}
    >
      <RoomProvider id="your-room-id">
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  )
}

export default Provider
