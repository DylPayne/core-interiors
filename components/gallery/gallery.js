const images = [
  // { src: "/k1.jpg", alt: "image" },
  // { src: "/k2.jpg", alt: "image" },
  // { src: "/k3.jpg", alt: "image" },
  // { src: "/k4.jpg", alt: "image" },
  { src: "/k5.jpg", alt: "image" },
  { src: "/kitchen1.jpg", alt: "image" },
];

export default function Gallery() {
  return (
    <div className="container mx-auto space-y-5 lg:space-y-0 lg:gap-5 lg:grid lg:grid-cols-3 pb-20">
      {images.map((image, i) => {
        return (
          <div className="w-full rounded hover:shadow-2xl" key={i}>
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-lg"
              key={i}
            />
          </div>
        );
      })}
    </div>
  );
}
