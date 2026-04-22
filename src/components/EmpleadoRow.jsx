import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  return (
    <div className="d-flex align-items-center border-bottom py-3">
      
      <EmpleadoAvatar pic={empleado.pic} />

      <div className="ms-3">
        <h6 className="mb-0">{empleado.fullName}</h6>
        <small>{empleado.title}</small>
        <span className="badge bg-info ms-2">
          {empleado.department}
        </span>
      </div>

    </div>
  );
};

export default EmpleadoRow;