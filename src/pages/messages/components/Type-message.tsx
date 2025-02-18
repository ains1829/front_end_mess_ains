import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ContentTypeMessage } from "@/types/messages/content-type-message";
function TypeMessage({ message }: { message: ContentTypeMessage }) {
  return (
    <div className="flex space-x-1">
      <Avatar>
        <AvatarImage
          className="rounded-full w-[30px] h-[30px]"
          src={`/images/profil/${message.photo_receive}`}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex flex-col bg-gray-100  w-full max-w-md  p-3 rounded-xl text-sm">
          <span>{message.message}</span>
          <span className="text-xs text-right text-gray-500">13:47</span>
        </div>
      </div>
    </div>
  );
}
export default TypeMessage;
