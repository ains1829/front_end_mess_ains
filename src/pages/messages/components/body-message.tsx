import { ContentTypeMessage } from "@/types/messages/content-type-message";
import TypeMessage from "./Type-message";
import MyMessage from "./My-message";
import { User } from "@/types/messages/user-type-message";
import NoMessage from "./No-message";
import { useEffect, useState } from "react";

function BodyMessage({
  userclicked,
  new_message,
  count,
}: {
  userclicked: User;
  new_message: string | undefined;
  count: number;
}) {
  const [message, setMessageApi] = useState<ContentTypeMessage[]>([]);
  useEffect(() => {
    if (new_message) {
      setMessageApi((prev) => [
        ...prev,
        {
          idmessage: 0,
          iduser_send: 1,
          iduser_receive: 2,
          message: new_message!,
          date: new Date(),
          photo_send: "",
          photo_receive: "",
        },
      ]);
    }
  }, [new_message, count]);
  const id_user_connected = 1;
  // appel api
  if (message.length === 0) {
    return (
      <div className="p-2 min-h-[540px] flex justify-center items-center">
        <NoMessage user={userclicked} />
      </div>
    );
  }
  return (
    <div className="p-2 min-h-[540px] max-h-[540px] space-y-2 overflow-y-auto">
      {message.map((element: ContentTypeMessage, index: number) =>
        element.iduser_send === id_user_connected ? (
          <MyMessage key={index} message={element} />
        ) : (
          <TypeMessage key={index} message={element} />
        )
      )}
    </div>
  );
}
export default BodyMessage;
