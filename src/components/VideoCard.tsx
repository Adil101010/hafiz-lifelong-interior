type Props = { src: string; poster: string; title: string; className?: string; autoPlay?: boolean }

export default function VideoCard({ src, poster, title, className = '', autoPlay = false }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-black ${className}`}>
      <video
        src={src}
        poster={poster}
        controls
        muted
        playsInline
        preload="metadata"
        autoPlay={autoPlay}
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16">
        <div className="text-sm font-extrabold text-white">{title}</div>
      </div>
    </div>
  )
}
