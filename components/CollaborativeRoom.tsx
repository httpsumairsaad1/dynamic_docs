'use client'

import { Editor } from '@/components/editor/Editor';
import ActiveCollaborators from './ActiveCollaborators';
import React from 'react'
import {
    RoomProvider,
    ClientSideSuspense
  } from "@liveblocks/react/suspense";
  import Header from '@/components/Header'
  import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs'

  // interface CollaborativeRoomProps {
  //   roomId: string;
  //   roomMetadata: string; // Adjust the type according to your metadata structure
  // }
  
// const CollaborativeRoom = () => {
  const CollaborativeRoom = ({ roomId, roomMetadata }: CollaborativeRoomProps) => {
  return (
    <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className='collaborative-room'>
                <Header>
                    <div className='flex w-fit items-center justify-center gap-2'>
                    <p className='document-title'>Share</p>
                    </div>

                    <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                      <ActiveCollaborators />

                      <SignedOut>
                        <SignInButton />
                      </SignedOut>
  
                      <SignedIn>
                        <UserButton />
                      </SignedIn>

                    </div>
                 </Header>
                <Editor/>
          </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom
