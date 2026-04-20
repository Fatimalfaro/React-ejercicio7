const EmpleadoAvatar = ({ pic }) => {
  return (
    <img 
      src={`/img/${pic}`}
      alt="avatar"
      className="avatar-img"
    />
  );
};

export default EmpleadoAvatar;