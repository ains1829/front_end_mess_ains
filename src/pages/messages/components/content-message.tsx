import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import TypeMessage from "./Type-message";
import MyMessage from "./My-message";

function ContentMessage() {
  return (
    <div className="bg-white">
      <div className="p-2 min-h-[540px] max-h-[540px] space-y-2 overflow-y-auto">
        <TypeMessage />
        <MyMessage />
        <TypeMessage />
        <MyMessage />
        <TypeMessage />
        <MyMessage />
        <MyMessage />
      </div>
      <div className="flex justify-center space-x-1  p-3 items-center">
        <Input
          className="w-5/6 bg-gray-100"
          type="text"
          placeholder="Type your message..."
        />
        <Button className="rounded-lg h-8 w-8">
          <Send size={14} />
        </Button>
      </div>
    </div>
  );
}
export default ContentMessage;
