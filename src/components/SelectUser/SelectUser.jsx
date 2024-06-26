import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import styles from './SelectUser.module.css';

function SelectUser() {
  const { userId, setUserId } = useContext(UserContext);

  const handleChange = (event) => {
    setUserId(Number(event.target.value));
    console.log(event.target.value);
  };

  return (
    <>
      <select
        className={styles['select']}
        name="user"
        id="user"
        value={userId}
        onChange={handleChange}
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </>
  );
}

export default SelectUser;
