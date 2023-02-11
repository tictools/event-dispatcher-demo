import "./App.css";
import ErrorRequest from "./components/ErrorRequest";
import LoaderRequest from "./components/LoaderRequest";
import useFetchRequest from "./hooks/useFetchRequest";
import UsersList from "./views/UsersList";

function App(): JSX.Element {
  const requestStatus = useFetchRequest("https://reqres.in/api/users");

  return (
    <div className="App">
      <h1>Event Dispatcher Demo</h1>
      <main>
        <section>
          <h2>Users List</h2>
          {requestStatus.state === 'loading' && <LoaderRequest />}
          {requestStatus.state === 'error' && <ErrorRequest error={requestStatus.error} />}
          {requestStatus.state === 'success' && <UsersList users={requestStatus.data} />}
        </section>
      </main>
    </div>
  );
}

export default App;
