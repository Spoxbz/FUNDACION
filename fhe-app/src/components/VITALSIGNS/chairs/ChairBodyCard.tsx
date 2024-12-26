export default function ChairBodyCard() {
  return (
    <div className="sections">
      <section>Turno</section>
      <section>Paciente</section>
      <section>
        Signos
        <div className="vts-actions-buttons">
          <button className="vts-button">Guardar</button>
          <button className="vts-button">Cancelar</button>
        </div>
      </section>
    </div>
  );
}
