import Container from "../../../layout/Container";

const TariffNav = ({ navItems, getIndex, index }) => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <button
            onClick={() => getIndex(item.id)}
            className={`rounded-[30px] text-20 py-[11px] px-10 duration-100 font-medium ${
              index === item.id && "bg-purple text-white font-semibold"
            }`}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default TariffNav;
