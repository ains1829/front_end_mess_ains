import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import instanceAxios from "../axios-config";
import { ContentTypeMessage } from "@/types/messages/content-type-message";

async function sendMessage(message: ContentTypeMessage) {
  try {
    const reponse = (await instanceAxios.post("/message/send_message", message))
      .data;
    return reponse;
  } catch (error) {
    console.log(error);
  }
}

export function useSendMessage() {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: (message: ContentTypeMessage) => sendMessage(message),
    onError: (error) => {
      // An error happened!
      console.log(`${error}`);
    },
    onSuccess: () => {
      // Boom baby!
    },
    onSettled: (data, error, variable) => {
      // Error or success... doesn't matter!
      queryclient.invalidateQueries({
        queryKey: ["message", variable.iduser_send, variable.iduser_receive],
      });
    },
  });
}

async function getMessages(iduser_send: number, iduser_receive: number) {
  try {
    const reponse = (
      await instanceAxios.get(
        `/message/my_message?idconnected=${iduser_send}&iduserclicked=${iduser_receive}`
      )
    ).data;
    return reponse;
  } catch (error) {
    console.log(error);
  }
}

export function usegetMessages(iduser_send: number, iduser_receive: number) {
  return useQuery({
    queryKey: ["message", iduser_send, iduser_receive],
    queryFn: () => getMessages(iduser_send, iduser_receive),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
