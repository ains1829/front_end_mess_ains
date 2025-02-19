import { SendHorizontal, Smile } from "lucide-react";
import BodyMessage from "./body-message";
import { User } from "@/types/messages/user-type-message";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
function ContentMessage({ user }: { user: User }) {
  const [message, setSendmessage] = useState<string>();
  const [message_send, setMessage_send] = useState<string | undefined>();
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white">
      <BodyMessage userclicked={user} new_message={message} count={count} />
      <div className="p-3">
        <div className="relative border rounded-full">
          <Smile
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={19}
          />
          <SendHorizontal
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
              message_send ? "text-blue-500 cursor-pointer" : "text-gray-500"
            }`}
            size={18}
            onClick={() => (
              setSendmessage(message_send),
              setCount(count + 1),
              setMessage_send("")
            )}
          />
          <Textarea
            className="w-11/12 ml-auto mr-auto  min-h-[35px] max-h-[35px] border-none shadow-none outline-none focus-visible:ring-0 focus-visible:border-nonne"
            placeholder="Write a message..."
            value={message_send}
            onChange={(e) => setMessage_send(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
export default ContentMessage;
