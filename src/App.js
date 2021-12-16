import logo from './logo.svg';
import './App.css';
import FriendForm from './components/form/FriendForm'
import { FriendsListProvider } from './components/providers/FriendsList';

function App() {
  return (
    <FriendsListProvider>
      <FriendForm />
    </FriendsListProvider>
  );
}

export default App;
