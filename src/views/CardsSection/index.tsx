import Card from '../../components/Card'
import PostActionRequest from '../../components/PostActionRequest'
import PostActionSuccess from '../../components/PostActionSuccess'
import UserForm from '../../components/UserForm'

export default function CardsSection() {
  return (
    <>
      <Card header='Add user'>
        <UserForm />
      </Card>
      <Card header='Create User ::  Request'>
        <PostActionRequest />
      </Card>
      <Card header='Create User ::  Success'>
        <PostActionSuccess />
      </Card>
    </>
  )
}
