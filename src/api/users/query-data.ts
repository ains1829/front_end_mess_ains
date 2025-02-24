import { useQuery } from "@tanstack/react-query";
import instanceAxios from "../axios-config";

async function getUsers_contact() {
  try {
    const reponse = (await instanceAxios.get("/api_user/all_user")).data;
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
async function getUserbytoken() {
  try {
    const reponse = await instanceAxios.get("/api_user/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    });
    return reponse.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      window.location.href = "/";
    }
  }
}

export function usegetUserbytoken() {
  return useQuery({
    queryKey: ["user", localStorage.getItem("auth-token")],
    queryFn: getUserbytoken,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
