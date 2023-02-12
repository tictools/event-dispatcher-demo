interface ErrorRequestProps {
  error: any
}

export default function ErrorRequest ({ error }: ErrorRequestProps) {
  return (
    <p>{error?.message}</p>
  )
}
