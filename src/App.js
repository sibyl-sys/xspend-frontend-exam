import './App.css';
import AddFriendForm from './components/form/AddFriendForm'
import { FriendsListProvider } from './components/providers/FriendsList';
import { Container,  Col, Row } from "reactstrap"
import FriendsListView from './components/friendsList/FriendsListView';


function App() {
  return (
    <Container 
        className="mt-5"
    >
      <Row className="justify-content-md-center  ">
        <Col sm={8} className="bg-light border p-3">
          <FriendsListProvider>
            <AddFriendForm />
            <FriendsListView />
          </FriendsListProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
