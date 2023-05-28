import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { BsPersonCircle } from 'react-icons/bs';
import { GiRotaryPhone } from 'react-icons/gi';

import IsLoading from 'components/IsLoading/IsLoading';
import Error from 'components/Error/Error';
import { Button, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ContactsList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <IsLoading />}
      {error && <Error />}

      {!isLoading && !error && (
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 500,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          <ul>
            {filteredContacts.map(({ id, name, number }) => (
              <ListItem
                key={id}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  marginTop: '30px',
                }}
              >
                <ListItemText
                  primary={<BsPersonCircle />}
                  secondary={`${name}`}
                  style={{
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'flex-start',
                    alignItems: 'baseline',
                    width: '150px',
                  }}
                />
                <ListItemText
                  primary={<GiRotaryPhone />}
                  secondary={`${number}`}
                  style={{
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'flex-start',
                    alignItems: 'baseline',
                    width: '300px',
                  }}
                />
                <Button onClick={() => handleDeleteContact(id)}>Delete</Button>
              </ListItem>
            ))}
          </ul>
        </List>
      )}
    </>
  );
}
