
import { gql } from "@apollo/client";

const GET_REMINDERS = gql`
  query RemindersQuery {
    reminders {
      id
      message
      createdAt
      schedule {
        occurance
        startTime
      }
    }
  }
`;

export default GET_REMINDERS;
