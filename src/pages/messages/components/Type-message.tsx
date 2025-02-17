import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import image_pdp from "../../../assets/images/profil/child-3473596_640.jpg";
function TypeMessage() {
  return (
    <div className="flex space-x-1">
      <Avatar>
        <AvatarImage
          className="rounded-full w-[30px] h-[30px]"
          src={image_pdp}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <div className="bg-gray-400 text-white w-full max-w-md  p-3 rounded-xl text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicin Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Reiciendis, adipisci placeat
          sit explicabo, dicta ab repudiandae saepe vitae tempore dolor vero
          dolorum asperiores labore eius optio facere nam nostrum ipsam.
        </div>
        <div className="text-xs ">
          <span className="text-gray-400">Message Received : </span>
          <span>13:47</span>
        </div>
      </div>
    </div>
  );
}
export default TypeMessage;
