import { ContentTypeMessage } from "@/types/messages/content-type-message";
import TypeMessage from "./Type-message";
import MyMessage from "./My-message";
import { User } from "@/types/messages/user-type-message";
import NoMessage from "./No-message";
import { useEffect, useRef, useState } from "react";
import { usegetMessages, useSendMessage } from "@/api/messages/query-message";

function BodyMessage({
  userclicked,
  new_message,
  count,
}: {
  userclicked: User;
  new_message: string | undefined;
  count: number;
}) {
  const send_message_mutation = useSendMessage();
  const message_api = usegetMessages(1, userclicked.iduser);
  const [message, setMessageApi] = useState<ContentTypeMessage[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight; // Positionne le scroll à la fin
      console.log(divRef.current.scrollTop);
    }
  }, [message]);

  useEffect(() => {
    const sendMessage = async () => {
      if (new_message) {
        const message_tosend = {
          idmessage: 0,
          iduser_send: 1,
          iduser_receive: userclicked.iduser,
          message: new_message!,
          photo_receive: userclicked.photo_user,
        };
        setMessageApi((prev) => [...prev, message_tosend]);
        await send_message_mutation.mutateAsync(message_tosend);
      }
    };
    sendMessage();
  }, [new_message, count]);

  useEffect(() => {
    if (message_api.isSuccess) {
      setMessageApi(message_api.data.data);
    }
  }, [message_api.data]);

  if (message_api.isPending) {
    return <>loading...</>;
  }
  if (message_api.isError) {
    return <>Error...</>;
  }

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
    <>
      <div
        ref={divRef}
        className="p-2 min-h-[540px] max-h-[540px] h-[540px] space-y-2 overflow-y-auto"
      >
        <div className="mt-5">
          <NoMessage user={userclicked} />
        </div>
        {message.map((element: ContentTypeMessage, index: number) =>
          element.iduser_send === id_user_connected ? (
            <MyMessage key={index} message={element} />
          ) : (
            <TypeMessage key={index} message={element} />
          )
        )}
      </div>
    </>
  );
}
export default BodyMessage;
