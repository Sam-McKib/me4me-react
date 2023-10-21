import React from 'react';
import { useQuery } from '@apollo/client';

// import './styles.module.scss';
import apolloClient from '../apollo/client';
import GET_REMINDERS from '../apollo/queries/GET_REMINDERS';
import styles from '../styles/Table.module.css'
import dayjs from 'dayjs';
import remindersFixture from './tableFixture'
import { Reminder } from '../model/Reminder';

const ReminderTable: React.FC = () => {
  // Fetch the Reminder data using Apollo Client
  let { loading, error, data } = useQuery(GET_REMINDERS, { client: apolloClient });
  if (loading) {
    return <div>Loading...</div>;
  }

 let reminders: Reminder[]
  if (error) {
    console.log('Fetch failed, using fixture instead')
    // return <div>Error: {error.message}</div>;
    reminders = remindersFixture;
  } else {

  console.log('data.reminders',data.reminders)
  console.log('dayjs().format()',dayjs().format())
  reminders = data.reminders;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>ID</th>
          <th className={styles.th}>Message</th>
          <th className={styles.th}>Occurrence</th>
          <th className={styles.th}>Created At</th>
          <th className={styles.th}>Start Time</th>
        </tr>
      </thead>
      <tbody>
        {reminders.map((reminder) => (
          <tr key={reminder.id}>
            <td className={styles.td}>{reminder.id}</td>
            <td className={styles.td}>{reminder.message}</td>
            <td className={styles.td}>{reminder.schedule.occurance}</td>
            <td className={styles.td}>{dayjs(reminder.createdAt).format('dddd, MMMM D, YYYY h:mm A')}</td>
            <td className={styles.td}>{dayjs(reminder.schedule.startTime).format('dddd, MMMM D, YYYY h:mm A')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReminderTable;