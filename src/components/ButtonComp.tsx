type ButtonPropsType = {
    handleButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void;
}

const ButtonComp = ({handleButtonClick} : ButtonPropsType) => {
  return (
    <div>
      <button onClick={(event)=> handleButtonClick(event, 1234)}>Click me</button>
    </div>
  )
}

export default ButtonComp
