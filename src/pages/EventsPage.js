import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "First evnet",
  },
  {
    id: "e2",
    title: "Second event",
  },
  {
    id: "e3",
    title: "Third event",
  },
  {
    id: "e4",
    title: "Forth event",
  },
];

function EventsPage() {
  return (
    <>
      <h1>This is an Event Page</h1>;
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
