export interface Reminder {
    id: string;
    message: string;
    createdAt: string;
    schedule: {
      startTime: string;
      occurance: string;
    };
  }