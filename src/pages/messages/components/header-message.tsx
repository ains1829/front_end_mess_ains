import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Phone, Video } from "lucide-react";

function HeaderMessage() {
  return (
    <div className="flex bg-white p-3 justify-between items-center">
      <div className="flex space-x-2 items-center">
        <Avatar>
          <AvatarImage
            className="rounded-full w-[25px]"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>Jean Dupont</span>
      </div>
      <div className="flex space-x-4">
        <Phone size={19} />
        <Video size={19} />
      </div>
    </div>
  );
}
export default HeaderMessage;
