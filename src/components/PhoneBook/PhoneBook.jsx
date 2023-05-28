import ContactForm from 'components/ContactForm/ContactForm';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactsList from 'components/ContactList/ContactsList';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PhoneBook = () => {
  return (
    <Container component="main" maxWidth="lg" style={{ overflowY: 'hidden' }}>
      <Typography
        component="h1"
        variant="h3"
        style={{
          textAlign: 'center',
          marginTop: '90px',
          textTransform: 'uppercase',
        }}
      >
        Phone Book
      </Typography>
      <ContactForm />
      <ContactFilter />
      <ContactsList />
    </Container>
  );
};

export default PhoneBook;
