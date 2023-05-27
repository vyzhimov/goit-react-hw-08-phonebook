import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import { selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <PhoneBook />
    </>
  );
};

export default Contacts;
