import { Input } from "@/components/ui/input";
import ContentMessage from "./components/content-message";
import HeaderMessage from "./components/header-message";
import { Search } from "lucide-react";
import ContentUserMessage from "./components/content-user-message";
import { useState } from "react";
import { User } from "@/types/messages/user-type-message";
import MessageAcceuil from "./components/message-acceuil";

function Message() {
  const [message_user, setMessageUser] = useState<User>();
  return (
    <div className="grid grid-cols-3 space-x-1 p-1">
      <div className="bg-white p-1">
        <div className="p-2">
          <span className="text-2xl font-bold">Discussions</span>
        </div>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 bg-white mt-1"
          />
        </div>
        <div className="min-h-[560px] max-h-[560px] overflow-y-auto mt-1 bg-white divide-y">
          <ContentUserMessage user_message_clicked={setMessageUser} />
        </div>
      </div>
      <div className="col-span-2 rounded-lg divide-y">
        {message_user === undefined ? (
          <MessageAcceuil />
        ) : (
          <>
            <HeaderMessage user={message_user} />
            <ContentMessage user={message_user} />
          </>
        )}
      </div>
    </div>
  );
}
export default Message;
