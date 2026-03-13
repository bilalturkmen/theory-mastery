export default function MediaDisplay({ type, src, autoPlayVideo = true }) {
  if (!src) return null;
  return (
    <div className="media-container">
      {type === "image" ? (
        <img src={src} alt="Reference" />
      ) : (
        <video
          src={src}
          controls
          autoPlay={autoPlayVideo}
          muted={autoPlayVideo}
        />
      )}
    </div>
  );
}
