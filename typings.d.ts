declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USER: string;
      EMAIL_PASS: string;
      MONGO_DB_URI: string;
      SEND_NOTIFICATION_FUNCTION_GROUP: 'notifier';
      PROCESS_DATA_FUNCTION_GROUP: 'data_processor';
      MICROSERVICE_ID: string;
      PORT: string;
    }
  }
}

export {};
