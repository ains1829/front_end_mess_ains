import { User } from "@/types/messages/user-type-message";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Phone, Video } from "lucide-react";

function HeaderMessage({ user }: { user: User | undefined }) {
  return (
    <div className="flex bg-white p-3 justify-between items-center shadow-md">
      <div className="flex space-x-2 items-center">
        <Avatar>
          <AvatarImage
            className="rounded-full w-[40px] h-[40px] object-cover"
            src={`/images/profil/${user?.photo_user}`}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>
          {user?.first_name} {user?.name_user}
        </span>
      </div>
      <div className="flex space-x-4">
        <Phone size={19} />
        <Video size={19} />
      </div>
    </div>
  );
}
export default HeaderMessage;
