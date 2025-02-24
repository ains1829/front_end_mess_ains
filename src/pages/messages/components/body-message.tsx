import { ContentTypeMessage } from "@/types/messages/content-type-message";
import TypeMessage from "./Type-message";
import MyMessage from "./My-message";
import { User, UserContext } from "@/types/messages/user-type-message";
import NoMessage from "./No-message";
import { useContext, useEffect, useRef } from "react";
import { usegetMessages, useSendMessage } from "@/api/messages/query-message";
import { Button } from "@/components/ui/button";

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
  const message_api = usegetMessages(userclicked.iduser);
  const divRef = useRef<HTMLDivElement>(null);
  const user_connected = useContext(UserContext);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight; // Positionne le scroll à la fin
    }
    const sendMessage = async () => {
      if (new_message) {
        const message_tosend = {
          idmessage: 0,
          iduser_send: user_connected?.iduser || 1,
          iduser_receive: userclicked.iduser,
          message: new_message!,
          photo_receive: userclicked.photo_user,
        };
        await send_message_mutation.mutateAsync(message_tosend);
      }
    };
    sendMessage();
  }, [new_message, count]);

  if (message_api.isPending) {
    return <>loading...</>;
  }
  if (message_api.isError) {
    return <>Error...</>;
  }
  if (message_api.data.pages[0].data.length === 0) {
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
        className="p-2 min-h-[540px] max-h-[540px] h-[540px]  overflow-y-auto"
      >
        {message_api.hasNextPage === false && (
          <div className="mt-5">
            <NoMessage user={userclicked} />
          </div>
        )}
        <div className="space-y-2">
          {message_api.hasNextPage && (
            <>
              {message_api.isFetchingNextPage && <div>Loading more...</div>}
              <div className="flex justify-center">
                <Button
                  size="sm"
                  className="text-xs bg-transparent text-gray-500  hover:bg-transparent"
                  onClick={() => message_api.fetchNextPage()}
                >
                  Message plus ancien
                </Button>
              </div>
            </>
          )}
          {[...message_api.data.pages]
            .reverse()
            .map((element: any) =>
              [...element.data]
                .reverse()
                .map((item: ContentTypeMessage, id: number) =>
                  item.iduser_send === user_connected?.iduser ? (
                    <MyMessage key={id} message={item} />
                  ) : (
                    <TypeMessage key={id} message={item} />
                  )
                )
            )}
        </div>
      </div>
    </>
  );
}
export default BodyMessage;
