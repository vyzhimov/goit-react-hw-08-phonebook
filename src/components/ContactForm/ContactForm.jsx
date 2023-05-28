import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import { toast } from 'react-hot-toast';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleOnSubmit = event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === data.get('name').toLowerCase()
    );

    if (isExist) {
      toast.error(`${data.get('name')} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        name: data.get('name'),
        number: data.get('number'),
      })
    );

    setName('');
    setNumber('');
  };

  const handleChangeName = event => setName(event.target.value);

  const handleChangeNumber = event => setNumber(event.target.value);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          style={{ width: '100%' }}
          onSubmit={handleOnSubmit}
        >
          <Grid
            container
            spacing={3}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid item xs={8} sm={5}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={handleChangeName}
                value={name}
              />
            </Grid>
            <Grid item xs={8} sm={5}>
              <TextField
                required
                fullWidth
                id="number"
                label="Number"
                name="number"
                autoComplete="number"
                onChange={handleChangeNumber}
                value={number}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ height: '53px', marginTop: '0', marginBottom: '0' }}
              >
                Add contact
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
