import { usegetUsers_contact } from "@/api/users/query-data";
import Usermessage from "./user-message";
import { User } from "@/types/messages/user-type-message";

export default function ContentUserMessage({
  user_message_clicked,
}: {
  user_message_clicked: (user: User) => void;
}) {
  const users = usegetUsers_contact();
  if (users.isPending) {
    return <>loading...</>;
  }
  if (users.isError) {
    return <>erreur...</>;
  }
  return users.data.map((item: User, index: number) => (
    <Usermessage
      user_message_clicked={user_message_clicked}
      user={item}
      key={index}
    />
  ));
}
