'use client'

import { Editor } from '@/components/editor/Editor';
import React from 'react'
import {
    RoomProvider,
    ClientSideSuspense
  } from "@liveblocks/react/suspense";
  import Header from '@/components/Header'
  import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className='collaborative-room'>
                <Header>
                    <div className='flex w-fit items-center justify-center gap-2'>
                    <p className='document title'>Share</p>
                    </div>
                    <SignedOut>
                    <SignInButton />
                    </SignedOut>
                    <SignedIn>
                    <UserButton />
                    </SignedIn>
                </Header>
                <Editor/>
          </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom
CollaborativeRoom