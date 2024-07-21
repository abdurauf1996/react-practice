import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";
function App() {
  const [showModal, setShowmodal] = useState(false);
  const [showConent, setShowContent] = useState(true);
  const [events, setEvents] = useState([
    { title: "abdurauf birthday party", id: 1 },
    { title: "sevara live strem", id: 2 },
    { title: "match:  manchester united vs bvarselona", id: 3 },
  ]);

  // delete items
  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };
  //toogle modal function
  const closeModal = () => {
    setShowmodal(false);
  };

  let subtitle = "All events well be here:)";
  return (
    <div className="App">
      <Title
        title="Abdurauf's Kingdom👑 Events "
        subtitle={"All events well be here:)"}
      />

      {showConent && (
        <button onClick={() => setShowContent(false)}>Hide Conent</button>
      )}
      {!showConent && (
        <button onClick={() => setShowContent(true)}>Show Conent</button>
      )}
      {showConent && <EventList events={events} handleDelete={handleDelete} />}

      {showModal && (
        <Modal closeModal={closeModal} isModeModal={false}>
          <NewEventForm />
        </Modal>
      )}
      <br />
      <br />
      <button
        onClick={() => {
          setShowmodal(true);
        }}
      >
        New Event
      </button>
    </div>
  );
}

export default App;
