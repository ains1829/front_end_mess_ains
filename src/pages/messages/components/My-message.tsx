import { ContentTypeMessage } from "@/types/messages/content-type-message";

function MyMessage({ message }: { message: ContentTypeMessage }) {
  return (
    <div className="flex justify-end">
      <div className="flex justify-end">
        <div className="flex flex-col bg-slate-700 text-white w-full max-w-md rounded-xl p-2 text-xs">
          <span>{message.message}</span>
        </div>
      </div>
    </div>
  );
}
export default MyMessage;
