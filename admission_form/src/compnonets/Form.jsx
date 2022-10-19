import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Checkbox from "@mui/material/Checkbox";

const initialState = {
  name: "",
  age: null,
  address: "",
  department: "",
  salary: null,
  martial_state: "",
};

function Form() {
  const [data, setData] = useState(initialState);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = () => {
    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => getData());
  };

  function getData() {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => setAllData(data));
  }

  return (
    <Box>
      <Box>
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Admission Details
        </Typography>
        <TextField
          id="outlined-basic"
          sx={{ margin: "10px" }}
          label="Name"
          variant="outlined"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          sx={{ margin: "10px" }}
          label="Age"
          type="number"
          variant="outlined"
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          sx={{ margin: "10px" }}
          label="Address"
          variant="outlined"
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />
        <FormControl sx={{ width: "200px", margin: "10px" }}>
          <InputLabel id="demo-simple-select-label">Department:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Department"
            onChange={(e) => setData({ ...data, department: e.target.value })}
          >
            <MenuItem value="fullStack">Full Stack</MenuItem>
            <MenuItem value="frontend">Frontend</MenuItem>
            <MenuItem value="backend">Backend</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          sx={{ margin: "10px" }}
          label="Salary"
          type="number"
          variant="outlined"
          onChange={(e) => setData({ ...data, salary: e.target.value })}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            sx={{ marginLeft: "10px" }}
            label="Marital state"
            onChange={(e) =>
              setData({ ...data, martial_state: e.target.checked })
            }
          />
        </FormGroup>
        <Button
          onClick={handleSubmit}
          sx={{ marginLeft: "10px" }}
          variant="contained"
        >
          submit
        </Button>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, marginTop: "50px" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Address&nbsp;</TableCell>
                <TableCell>Department&nbsp;</TableCell>
                <TableCell>Salary&nbsp;</TableCell>
                <TableCell>Maritial Status&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allData?.map((e) => (
                <TableRow >
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.age}</TableCell>
                  <TableCell>{e.address}</TableCell>
                  <TableCell>{e.department}</TableCell>
                  <TableCell>{e.salary}</TableCell>
                  <TableCell>
                    {e.martial_state ? "Married" : "Single"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Form;
