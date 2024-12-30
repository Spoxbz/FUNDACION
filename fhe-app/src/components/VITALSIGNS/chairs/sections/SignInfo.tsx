import { Box } from "@mui/material";
import React, { useState } from "react";

// Estilos
import "../../../../CSS/vitalsigns.css";

interface EyeMeasurement {
  pioOd: string;
  pioOs: string;
  avScOd: string;
  avScOs: string;
  avCcOd: string;
  avCcOs: string;
}

export default function SignInfo() {
  // Estado para los signos vitales
  const [vitals, setVitals] = useState({
    temperature: "",
    weight: "",
    height: "",
    saturation: "",
    bloodPressure: "",
    pulse: "",
    respirationRate: "",
  });

  // Estado para los datos de los ojos
  const [eyeMeasurements, setEyeMeasurements] = useState<EyeMeasurement>({
    pioOd: "",
    pioOs: "",
    avScOd: "",
    avScOs: "",
    avCcOd: "",
    avCcOs: "",
  });

  // Estado para el checkbox de "requiere medida ojos"
  const [requiresEyeMeasurement, setRequiresEyeMeasurement] = useState(false);

  const handleChangeVitals = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVitals((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeEyes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEyeMeasurements((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejar el cambio en el checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequiresEyeMeasurement(e.target.checked);
  };

  return (
    <Box className="fields-sign-info">
      <div className="field-signs">
        <label htmlFor="temperature">Temperatura:</label>
        <input
          id="temperature"
          type="text"
          className="field-signs-input"
          name="temperature"
          value={vitals.temperature}
          onChange={handleChangeVitals}
        />
      </div>

      <div className="field-signs">
        <label htmlFor="weight">Peso (kg):</label>
        <input
          id="weight"
          type="text"
          className="field-signs-input"
          name="weight"
          value={vitals.weight}
          onChange={handleChangeVitals}
        />
      </div>

      <div className="field-signs">
        <label htmlFor="height">Talla (cm):</label>
        <input
          id="height"
          type="text"
          className="field-signs-input"
          name="height"
          value={vitals.height}
          onChange={handleChangeVitals}
        />
      </div>

      <div className="field-signs">
        <label htmlFor="saturation">Saturación:</label>
        <input
          id="saturation"
          type="text"
          className="field-signs-input"
          name="saturation"
          value={vitals.saturation}
          onChange={handleChangeVitals}
        />
      </div>

      <div className="field-signs">
        <label htmlFor="bloodPressure">Tensión A:</label>
        <input
          id="bloodPressure"
          type="text"
          className="field-signs-input"
          name="bloodPressure"
          value={vitals.bloodPressure}
          onChange={handleChangeVitals}
        />
      </div>

      <div className="field-signs">
        <label htmlFor="pulse">Pulso:</label>
        <input
          id="pulse"
          type="text"
          className="field-signs-input"
          name="pulse"
          value={vitals.pulse}
          onChange={handleChangeVitals}
        />
      </div>

      <div className="field-signs">
        <label htmlFor="respirationRate">FrecResp:</label>
        <input
          id="respirationRate"
          type="text"
          className="field-signs-input"
          name="respirationRate"
          value={vitals.respirationRate}
          onChange={handleChangeVitals}
        />
      </div>

      {/* Checkbox para "requiere medida ojos" */}
      <div className="field-signs-checkbox">
        <label htmlFor="requiresEyeMeasurement">Requiere medida ojos</label>
        <input
          id="requiresEyeMeasurement"
          type="checkbox"
          checked={requiresEyeMeasurement}
          onChange={handleCheckboxChange}
        />
      </div>

      {/* Mostrar campos opcionales de ojos solo si el checkbox está seleccionado */}
      {requiresEyeMeasurement && (
        <div className="fields-eyes">
          <div className="fields-eyes-input">
            <label htmlFor="pioOd">Pio (OD):</label>
            <input
              id="pioOd"
              type="text"
              className="fields-eyes-input-input"
              name="pioOd"
              value={eyeMeasurements.pioOd}
              onChange={handleChangeEyes}
            />
          </div>

          <div className="fields-eyes-input">
            <label htmlFor="pioOs">Pio (OS):</label>
            <input
              id="pioOs"
              type="text"
              className="fields-eyes-input-input"
              name="pioOs"
              value={eyeMeasurements.pioOs}
              onChange={handleChangeEyes}
            />
          </div>

          <div className="fields-eyes-input">
            <label htmlFor="avScOd">Agudeza Visual S/C (OD):</label>
            <input
              id="avScOd"
              type="text"
              className="fields-eyes-input-input"
              name="avScOd"
              value={eyeMeasurements.avScOd}
              onChange={handleChangeEyes}
            />
          </div>

          <div className="fields-eyes-input">
            <label htmlFor="avScOs">Agudeza Visual S/C (OS):</label>
            <input
              id="avScOs"
              type="text"
              className="fields-eyes-input-input"
              name="avScOs"
              value={eyeMeasurements.avScOs}
              onChange={handleChangeEyes}
            />
          </div>

          <div className="fields-eyes-input">
            <label htmlFor="avCcOd">Agudeza Visual C/C (OD):</label>
            <input
              id="avCcOd"
              type="text"
              className="fields-eyes-input-input"
              name="avCcOd"
              value={eyeMeasurements.avCcOd}
              onChange={handleChangeEyes}
            />
          </div>

          <div className="fields-eyes-input">
            <label htmlFor="avCcOs">Agudeza Visual C/C (OS):</label>
            <input
              id="avCcOs"
              type="text"
              className="fields-eyes-input-input"
              name="avCcOs"
              value={eyeMeasurements.avCcOs}
              onChange={handleChangeEyes}
            />
          </div>
        </div>
      )}
    </Box>
  );
}
