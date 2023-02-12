import Card from '../../components/Card'
import UserForm from '../../components/UserForm'

export default function CardsSection () {
  return (
    <>
      <Card header='Post action'>
        <p>This is a card container</p>
      </Card>
      <Card header='Post action'>
        <p>This is a card container</p>
      </Card>
      <Card header='Add user'>
        <UserForm />
      </Card>
    </>
  )
}
