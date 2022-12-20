const ProfileButton = ({ children, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-purple border-2 border-purple rounded-10 font-semibold text-center w-[180px] mr-[30px] last:mr-0 text-18 py-[13px] ${
        variant === "contained"
          ? "bg-purple text-white"
          : "bg-transparent text-purple"
      }`}
    >
      {children}
    </button>
  );
};

export default ProfileButton;
