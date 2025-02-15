import { Input } from "@/components/ui/input";
import ContentMessage from "./components/content-message";
import HeaderMessage from "./components/header-message";
import { Search } from "lucide-react";
import ContentUserMessage from "./components/content-user-message";

function Message() {
  return (
    <div className="grid grid-cols-3 space-x-1 p-1">
      <div>
        <div className="p-2 bg-white rounded-lg">
          <span className="text-xl font-bold">Discussions</span>
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
          <ContentUserMessage />
        </div>
      </div>
      <div className="col-span-2 rounded-lg divide-y">
        <HeaderMessage />
        <ContentMessage />
      </div>
    </div>
  );
}
export default Message;
