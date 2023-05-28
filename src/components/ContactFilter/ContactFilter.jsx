import { setFilter } from 'redux/contacts/filterSlice';
import { selectContactsFilter } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

const ContactFilter = () => {
  const filteredValue = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      autoComplete="given-name"
      name="filter"
      required
      fullWidth
      id="filter"
      label="Search contact by name or number"
      autoFocus
      value={filteredValue}
      onChange={handleChangeFilter}
      style={{ marginTop: '30px' }}
    />
  );
};

export default ContactFilter;
