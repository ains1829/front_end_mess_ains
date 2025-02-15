import { useQuery } from "@tanstack/react-query";
import instanceAxios from "../axios-config";

async function getUsers_contact() {
  try {
    const reponse = (await instanceAxios.get("/api/all_user")).data;
    return reponse;
  } catch (error) {
    console.log(error);
  }
}

export function usegetUsers_contact() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers_contact,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
