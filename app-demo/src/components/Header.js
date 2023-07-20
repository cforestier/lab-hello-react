const imagesHeader = [
  {
    imgSource: "/images/ironhack-logo-xs.png",
    imgAlt: "Ironhack logo",
  },
  {
    imgSource: "/images/menu-top-xs.png",
    imgAlt: "mini menu",
  },
];

function Header() {
  return (
    <div className="header">
      {imagesHeader.map((image) => (
        <img src={image.imgSource} alt={image.imgAlt} />
      ))}
    </div>
  );
}

export default Header;
