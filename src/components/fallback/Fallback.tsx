type ErrorProps = {
  error: String
}

const Fallback = ({ error }: ErrorProps) => {
  console.error(error)
  return <div>Oops Something has gone wrong</div>
}

export { Fallback }
