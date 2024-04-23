import { DoubleWidthButton } from './stylesDW';

const ButtonDW = ({ label, onClick }) => {
  return (
    <DoubleWidthButton onClick={onClick} type="button">
      {label}
    </DoubleWidthButton>
  );
}

export default ButtonDW; 