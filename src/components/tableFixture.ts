
import { Reminder } from '../model/Reminder';

const reminders: Reminder[] = [
    {
      id: '1',
      message: 'Some wise insight',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-25T10:00:00Z',
        occurance: 'DAILY'
      }
    },
    {
      id: '2',
      message: 'Daily Habit reminder',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-25T12:00:00Z',
        occurance: 'DAILY'
      }
    },
    {
      id: '3',
      message: 'Monthly Goal Reminder',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-25T14:00:00Z',
        occurance: 'MONTHLY'
      }
    },
    {
      id: '4',
      message: 'One-time Special Event',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-31T20:00:00Z',
        occurance: 'ONCE'
      }
    },
    {
      id: '5',
      message: 'Weekly Meeting',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-25T15:30:00Z',
        occurance: 'WEEKLY'
      }
    },
    {
      id: '6',
      message: 'Monthly Review',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-26T09:00:00Z',
        occurance: 'MONTHLY'
      }
    },
    {
      id: '7',
      message: 'Daily Workout',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-25T18:00:00Z',
        occurance: 'DAILY'
      }
    },
    {
      id: '8',
      message: 'Weekly Grocery Shopping',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-25T16:00:00Z',
        occurance: 'WEEKLY'
      }
    },
    {
      id: '9',
      message: 'Monthly Financial Report',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-27T14:00:00Z',
        occurance: 'MONTHLY'
      }
    },
    {
      id: '10',
      message: 'One-time Birthday Party',
      createdAt: '2023-12-25T09:00:00Z',
      schedule: {
        startTime: '2023-12-31T18:00:00Z',
        occurance: 'DAILY'
      }
    },
  ];

  export default reminders;