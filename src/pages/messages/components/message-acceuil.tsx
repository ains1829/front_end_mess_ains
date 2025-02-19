function MessageAcceuil() {
  return (
    <div className="min-h-[670px] max-h-[670px] bg-white flex flex-col justify-center items-center space-y-2">
      <img src="/chat.png" alt="..." width={90} />
      <div className="flex flex-col items-center space-y-1 max-w-lg mr-auto ml-auto">
        <span className="text-center font-bold">
          Restez en contact avec vos groupes
        </span>
        <span className="text-center text-xs">
          Que ce soit pour organiser une sortie entre amies ou discuter avec
          votre famille, les conversations de groupe devraient être aussi
          simples que possible.
        </span>
      </div>
    </div>
  );
}
export default MessageAcceuil;
