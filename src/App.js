import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon/>}
            checkedIcon={<SaveIcon/>}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        } label="Testing Checkbox"
      />
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <CheckboxExample />
      <ButtonGroup>
        <Button startIcon={<SaveIcon />} variant='contained' color='primary'>
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          variant='contained'
          color='secondary'
        >
          Discard
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
