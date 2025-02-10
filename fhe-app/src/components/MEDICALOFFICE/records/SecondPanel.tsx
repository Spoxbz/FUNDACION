import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Tab, Tabs, Typography } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { CustomTabPanel, a11yProps } from "./propstabs";

export default function SecondPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="mr-sp-container">
        <Box className="sp-left sections">
          <Typography variant="h5">Derecha</Typography>
          <br />

          <Typography>Motivo de Consulta</Typography>
          <Box display={"flex"} flexDirection={"column"} padding={"0.5rem"}>
            <textarea className="sp-left-textArea"></textarea>
          </Box>
          <br />
          <Accordion>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span">Contenido</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary">
                    <Tab label="Antecedentes" {...a11yProps(0)} />
                    <Tab label="Alergia" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  Item Two
                </CustomTabPanel>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box className="sp-rigth sections">
          <Typography variant="h5">Problema</Typography>
        </Box>
      </div>
    </>
  );
}
