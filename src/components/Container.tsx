type ContainerPropsStyles = {
    styles: React.CSSProperties
}

const Container = ({styles}: ContainerPropsStyles) => {
  return (
    <div style={styles}>This line is styled by the style props</div>
  )
}

export default Container
