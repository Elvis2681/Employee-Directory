import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Header from "./Header";
//››fake data events into a map and make them into props
const events = [
  {
    id: 1,
    name: "event 1",
    date: "may31,2021",
    Location: "san Diego",
  },
  {
    id: 2,
    name: "event 2",
    date: "june31,2021",
    Location: "San Francisco",
  },
  {
    id: 3,
    name: "event 3",
    date: "july31,2021",
    Location: "New York",
  },
];

function EventContainer() {
  return (
    <table>
      <thead>
        <tbody>
          <trow></trow>
        </tbody>
      </thead>
    </table>
  );
}
