import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({ empleados }) => {
  return (
    <div className="card p-3">
      {empleados.map((empleado) => (
        <EmpleadoRow key={empleado.id} empleado={empleado} />
      ))}
    </div>
  );
};

export default EmpleadoList;