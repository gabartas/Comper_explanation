import moment from 'moment';
import { Calendar, Event, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './styles/Agenda.module.css';

const localizer = momentLocalizer(moment);

export default function Agenda({ events }: { events: Event[] }) {
  return (
    <div className={styles.agenda}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="week"
        events={events}
        style={{ height: "100vh" }}
      />
    </div>
  );
}
