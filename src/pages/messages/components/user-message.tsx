import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { User } from "@/types/messages/user-type-message";
function Usermessage({ user }: { user: User }) {
  return (
    <div className="p-3 bg-white flex items-center space-x-3 cursor-pointer hover:bg-gray-50">
      <Avatar className="h-10 w-10">
        <AvatarImage
          className="rounded-full bg-red-500 h-full w-full"
          src={`/images/profil/${user.photo_user}`}
          alt="..."
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span>
          {user.first_name} {user.name_user}
        </span>
        <span className="text-xs">Message message mesage....</span>
      </div>
    </div>
  );
}
export default Usermessage;
