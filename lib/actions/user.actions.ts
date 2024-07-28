'use server';

import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { liveblocks } from "../liveblocks";

// Function to fetch Clerk users based on provided user IDs
export const getClerkUsers = async ({ userIds }: { userIds: string[]}) => {
    try {
      // Fetching user data from Clerk API using provided email addresses
      const { data } = await clerkClient.users.getUserList({
        emailAddress: userIds,
      });
  
      // Mapping the fetched user data to a more usable format
      const users = data.map((user) => ({
        id: user.id, // User ID
        name: `${user.firstName} ${user.lastName}`, // Full name of the user
        email: user.emailAddresses[0].emailAddress, // Primary email address of the user
        avatar: user.imageUrl, // URL of the user's avatar image
      }));
  
      // Sorting users to match the order of provided user IDs
      const sortedUsers = userIds.map((email) => users.find((user) => user.email === email));
  
      // Returning the sorted user data after parsing and stringifying
      return parseStringify(sortedUsers);
    } catch (error) {
      // Logging any errors that occur during the fetching process
      console.log(`Error fetching users: ${error}`);
    }
  }

//   export const getDocumentUsers = async ({ roomId, currentUser, text }: { roomId: string, currentUser: string, text: string }) => {
//     try {
//       const room = await liveblocks.getRoom(roomId);
  
//       const users = Object.keys(room.usersAccesses).filter((email) => email !== currentUser);
  
//       if(text.length) {
//         const lowerCaseText = text.toLowerCase();
  
//         const filteredUsers = users.filter((email: string) => email.toLowerCase().includes(lowerCaseText))
  
//         return parseStringify(filteredUsers);
//       }
  
//       return parseStringify(users);
//     } catch (error) {
//       console.log(`Error fetching document users: ${error}`);
//     }
//   }