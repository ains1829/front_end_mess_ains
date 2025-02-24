import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import instanceAxios from "../axios-config";
import { ContentTypeMessage } from "@/types/messages/content-type-message";

async function sendMessage(message: ContentTypeMessage) {
  try {
    const reponse = (
      await instanceAxios.post("/message/send_message", message, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      })
    ).data;
    return reponse;
  } catch (error) {
    console.log(error);
  }
}

export function useSendMessage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (message: ContentTypeMessage) => sendMessage(message),
    onMutate: async (newMessage) => {
      queryClient.setQueryData(
        ["message", newMessage.iduser_receive],
        (oldData: any) => {
          const newData = {
            ...oldData,
            pages: oldData.pages.map((page: any) => ({
              ...page,
              messages: [newMessage, ...page.data],
            })),
          };
          return newData;
        }
      );
    },
    onError: (error) => {},
    onSuccess: () => {},
    onSettled: (data, error, variable) => {
      queryClient.invalidateQueries({
        queryKey: ["message", variable.iduser_receive],
      });
    },
  });
}
async function getMessages(iduser_receive: number, pageParam: number) {
  try {
    const reponse = (
      await instanceAxios.get(`/message/my_message`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
        params: {
          iduserclicked: iduser_receive,
          page: pageParam,
        },
      })
    ).data;
    console.log(reponse);
    return reponse;
  } catch (error) {
    console.log(error);
  }
}

export function usegetMessages(iduserclicked: number) {
  return useInfiniteQuery({
    queryKey: ["message", iduserclicked],
    queryFn: ({ pageParam }) => getMessages(iduserclicked, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.page + 20 : undefined;
    },
    staleTime: Infinity,
    gcTime: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
