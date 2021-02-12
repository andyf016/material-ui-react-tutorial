import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'

function App() {
  return (
    <div className='App'>
      <ButtonGroup>
      <Button  
        startIcon={<SaveIcon/>}
        variant='contained' 
        color='primary'>
        Save
      </Button>
      <Button  
        startIcon={<DeleteIcon/>}
        variant='contained' 
        color='secondary'>
        Discard
      </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
