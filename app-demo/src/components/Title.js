const paragraphes = [
  { content: "You will learn how to use" },
  { content: "the most popular frontend library" },
  { content: "and become a super Ninja developer" },
];

function Title() {
  return (
    <div className="title">
      <h1>Say hello to ReactJS</h1>
      {paragraphes.map((paragraph) => (
        <p>{paragraph.content}</p>
      ))}
      <button>Awesome!</button>
    </div>
  );
}

export default Title;
