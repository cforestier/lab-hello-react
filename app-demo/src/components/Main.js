const images = [
  {
    imageSrc: "/images/icon1.png",
    imageAlt: "icon1",
    title: "Declarative",
    paragraph: "React makes it painless to create interactive UIs.",
  },
  {
    imageSrc: "/images/icon2.png",
    imageAlt: "icon2",
    title: "Components",
    paragraph: "Build encapsulated components that manage their state.",
  },
  {
    imageSrc: "/images/icon3.png",
    imageAlt: "icon3",
    title: "Single-Way",
    paragraph: "A set of immutable values are passed to the component's.",
  },
  {
    imageSrc: `/images/icon4.png`,
    imageAlt: "icon4",
    title: "JWS",
    paragraph: "Statistically-typed, designed to run on dern computers.",
  },
];

function Main() {
  return (
    <div className="main">
      {images.map((image) => (
        <div>
          <img src={image.imageSrc} alt={image.imageAlt} />
          <h2>{image.title}</h2>
          <p>{image.paragraph}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;
