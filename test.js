import React, { useActionState, useState, useSyncExternalStore } from 'react';
import { TextField } from '@mui/material';


const Test =() => {
  const [name ,setName] = useState('');
  return (
    <div>
      <form>
      <TextField type='text' placeholder='name' variant='filled'></TextField>
      <TextField type='email' placeholder='email' variant='outlined'></TextField>
      </form>

    </div>
  );
}

export default Test;
