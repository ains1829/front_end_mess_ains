import BlurText from "@/anim/BlurText/BlurText";
function MessageAcceuil() {
  return (
    <div className="min-h-[670px] max-h-[670px] bg-gray-50 flex justify-center items-center">
      <div className="flex justify-evenly items-center p-5">
        <div className="flex flex-col space-y-5 max-w-lg mr-auto ml-auto">
          <BlurText
            text="Restez en contact avec vos groupes"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl font-bold"
          />
          <div>
            <BlurText
              text="Que ce soit pour organiser une sortie entre ami·es ou discuter avec votre famille, les conversations de groupe devraient être aussi simples que possible."
              delay={100}
              animateBy="words"
              direction="top"
            />
          </div>
        </div>
        <img src="/groupe.png" alt="..." width={300} />
      </div>
    </div>
  );
}
export default MessageAcceuil;
