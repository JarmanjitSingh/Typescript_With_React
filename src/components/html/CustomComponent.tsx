import Toast from "../templateLiterals/Toast"
//let us suppose i want a same proptypes as the toast component proptypes then we can do it as below


const CustomComponent = (props: React.ComponentProps<typeof Toast>) => {
  return (
    <div>
      {props.position}
    </div>
  )
}

export default CustomComponent
