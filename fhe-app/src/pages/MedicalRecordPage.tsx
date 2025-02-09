// Estilos
import "../CSS/medical_record/medicalrecordpage.css";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Top from "../components/MEDICALOFFICE/records/Top";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ROUTES from "../enviroment/variables_routes";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MedicalRecordPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="mr-container">
        <div className="mr-header">
          <Stack className="mr-header-cont-back">
            <Link to={ROUTES.MODULES.MTCHILD}>
              <ArrowBack className="mr-header-back" />
            </Link>
          </Stack>
          <Stack className="item">
            <Typography variant="h5">Ficha Medica</Typography>
          </Stack>
          <Stack></Stack>
        </div>
        <div className="mr-cont-tabs">
          <Box sx={{ width: "100%" }}>
            <Box className={"mr-header-tabs"} sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Paciente" {...a11yProps(0)} />
                <Tab label="Diagnóstico" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Top />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Box>
        </div>
      </div>
    </>
  );
}
