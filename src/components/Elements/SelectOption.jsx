import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectOption({
  selectLabel,
  selectValue,
  setSelectValue,
  selectValues,
}) {
  
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120,backgroundColor:"#ffffff" }} size="small">
      <InputLabel id="demo-select-small">{selectLabel}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={selectValue}
        label={selectLabel}
        onChange={handleChange}
      >
        {selectValues.map((value) => {
          return <MenuItem value={value?.value} key={value?.name}>{value?.name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
