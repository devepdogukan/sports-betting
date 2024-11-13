import AlertDanger from '~/components/alert/danger'
import Loader from '~/components/loader'

type PropsLoader = {
  loading: boolean
  children: JSX.Element
  error: string | null
}
const Boundary = ({ loading, children, error }: PropsLoader) => {
  if (loading) return <Loader />

  if (error) return <AlertDanger text={error} />
  return children
}

export default Boundary
