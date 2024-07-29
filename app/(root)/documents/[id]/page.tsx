import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Define or import SearchParamProps
type SearchParamProps = {
  params: {
    id: string;
  };
};

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    // Redirect to sign-in page if user is not authenticated
    redirect('/sign-in');
  }

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });
  console.log(room);

  if (!room) {
    // Redirect to home page if the room is not found
    redirect('/');
  }

  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata}
      />
    </main>
  );
};

export default Document;
