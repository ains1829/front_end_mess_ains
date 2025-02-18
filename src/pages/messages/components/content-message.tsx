import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import BodyMessage from "./body-message";
import { User } from "@/types/messages/user-type-message";
import { useState } from "react";

function ContentMessage({ user }: { user: User }) {
  const [message, setSendmessage] = useState<string>();
  const [message_send, setMessage_send] = useState<string | undefined>();
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white">
      <BodyMessage userclicked={user} new_message={message} count={count} />
      <div className="flex justify-center space-x-1  p-3 items-center">
        <Input
          className="w-5/6 bg-gray-100"
          type="text"
          placeholder="Type your message..."
          value={message_send}
          onChange={(e) => setMessage_send(e.target.value)}
        />
        <Button
          onClick={() => (
            setSendmessage(message_send),
            setCount(count + 1),
            setMessage_send("")
          )}
          className="rounded-full h-9 w-9"
        >
          <Send size={15} />
        </Button>
      </div>
    </div>
  );
}
export default ContentMessage;
