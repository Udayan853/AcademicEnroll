type ErrorProps = {
  error: String
}

const Fallback = ({ error }: ErrorProps) => {
  console.error(error)
  return <div>Oops Something went wrong</div>
}

export { Fallback }
