import SelectUser from '../SelectUser/SelectUser';
// import Button from '../Button/Button';
// import { useState } from 'react';
import Logo from '../Logo/Logo';

const logos = '/Logo.svg';

function Header() {
  // const [logo, setLogo] = useState(0);

  // const toggleLogo = () => {
  //   setLogo((prev) => (prev === 0 ? 1 : 0));
  // };

  return (
    <>
      <Logo image={logos} />
      <SelectUser />
      {/* <Button onClick={toggleLogo}>Toggle logo</Button> */}
    </>
  );
}

export default Header;
