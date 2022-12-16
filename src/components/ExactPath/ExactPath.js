const ExactPath = ({ name }) => {
  const paths = [
    {
      eng: "relationship-between-partners",
      rus: "Отношения с партнером",
    },
    {
      eng: "sense-of-anxiety",
      rus: "Чувство тревоги",
    },
    {
      eng: "emotions",
      rus: "Эмоции",
    },
    {
      eng: "depressive state",
      rus: "Депрессивное состояние",
    },
  ];

  const addedPath = paths.filter((item) => item.eng === name);

  return (
    <h1>{`Категории -> ${addedPath ? addedPath[0].rus : "Nothing found"}`}</h1>
  );
};

export default ExactPath;
