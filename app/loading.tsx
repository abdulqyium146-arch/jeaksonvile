export default function Loading() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-4 border-yellow-400/30 border-t-yellow-400 animate-spin" />
        <p className="text-zinc-500 text-sm">Loading...</p>
      </div>
    </div>
  )
}
