import { ContentTypeMessage } from "@/types/messages/content-type-message";
function TypeMessage({ message }: { message: ContentTypeMessage }) {
  return (
    <div className="flex space-x-1">
      <div>
        <div className="flex flex-col bg-gray-100  w-full max-w-md  p-2 rounded-xl text-xs">
          <span>{message.message}</span>
        </div>
      </div>
    </div>
  );
}
export default TypeMessage;
