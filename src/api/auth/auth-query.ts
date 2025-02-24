import { useMutation } from "@tanstack/react-query";
import instanceAxios from "../axios-config";
import { AuthType } from "@/types/auth/auth-type";

async function Login(data: AuthType) {
  try {
    const reponse = await instanceAxios.post("/auth/login", data);
    return reponse.data;
  } catch (error: any) {
    console.log(error.message);
  }
}

export function useLogin() {
  return useMutation({
    mutationFn: (data: AuthType) => Login(data),
    onError() {},
    onSuccess() {},
  });
}
