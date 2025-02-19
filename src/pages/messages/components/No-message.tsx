import { Button } from "@/components/ui/button";
import { User } from "@/types/messages/user-type-message";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function NoMessage({ user }: { user: User }) {
  return (
    <div className="flex flex-col justify-center mt-auto mb-auto items-center">
      <Avatar>
        <AvatarImage
          className="rounded-full w-[80px] h-[80px] object-cover"
          src={`/images/profil/${user.photo_user}`}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span>
        {user.first_name} {user.name_user}
      </span>
      <div className="mt-2 text-xs flex flex-col items-center space-y-1">
        <span>You're friends in departement Human Ressource</span>
        <Button variant={"outline"} className="text-xs">
          View Profil
        </Button>
        <span>You are now connected on Ains</span>
      </div>
    </div>
  );
}
export default NoMessage;
