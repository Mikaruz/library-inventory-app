import SyncLoader from "react-spinners/SyncLoader";

export const LoadingSpiner = () => {
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-5">
      <SyncLoader size={20} color="#272E3F" speedMultiplier={0.5} />
      <span className="text-lg font-semibold">Cargando...</span>
    </div>
  );
};
