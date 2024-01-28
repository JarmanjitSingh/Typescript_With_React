import { ReactNode } from "react"

type StatusPropType = {
    children: ReactNode
}

const Status = ({children}: StatusPropType) => {
  return (
    <div>
     Hello 🫱 {children}
    </div>
  )
}

export default Status
