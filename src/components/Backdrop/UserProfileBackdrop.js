const UserProfileBackdrop = ({ open, onClick }) => {
  if (!open) return;

  return (
    <div
      onClick={onClick}
      className="absolute w-screen h-screen top-0 left-0 z-10"
    ></div>
  );
};

export default UserProfileBackdrop;
