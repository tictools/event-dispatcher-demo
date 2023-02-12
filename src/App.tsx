import styles from "./App.module.css";
import useFetchRequest from "./hooks/useFetchRequest";
import CardsSection from "./views/CardsSection";
import UsersSection from "./views/UsersSection";

function App(): JSX.Element {
  const requestStatus = useFetchRequest("https://reqres.in/api/users?per_page=5");

  return (
    <div className={styles['app__wrapper']}>
      <h1 className={styles['app__title']}>Event Dispatcher Demo</h1>
      <main className={styles['app__sections-wrapper']}>
        <section>
          <UsersSection requestStatus={requestStatus} />
        </section>
        <aside>
          <CardsSection />
        </aside>
      </main>
    </div>
  );
}

export default App;
