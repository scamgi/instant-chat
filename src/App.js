import logo from './logo.svg';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore, googleProvider } from './config/firebase';
import { collection } from 'firebase/firestore';
import { signInWithPopup } from 'firebase/auth';


function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    try {
      signInWithPopup(auth, googleProvider);
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <button onClick={signInWithGoogle}>Sing In</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

function ChatRoom() {
  const messagesRef = collection(firestore, 'messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  return (
    <>
      <div>
        { messages && messages.map((message) => <ChatMessage key={message.id} message={message} />)}
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid } = props.message;
  return <p>{text}</p>
}

export default App;
