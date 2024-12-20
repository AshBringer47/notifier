import { IConfig, NodeEnvTypes } from "../types/interface";
import process from "node:process";

const applicationDevelopmentConfig: IConfig = {
  nodeEnv: NodeEnvTypes.development,
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT),
  },
  db: {
    connectionName: "default",
    uri: process.env.MONGO_DB_URI,
  },
  app: {
    name: "Notifier microservice",
    abbr: "LB",
    version: "1.0.0",
    documentation: {
      title: "API",
      description: "REST API Documentation",
      prefix: "/api/docs",
    },
    routes: {
      mainPrefix: "/api/v1",
    },
  },
  mailer: {
    user: String(process.env.EMAIL_USER),
    pass: String(process.env.EMAIL_PASS),
  },
  microserviceInformation: {
    microserviceGroup: process.env.SEND_NOTIFICATION_FUNCTION_GROUP,
    microserviceId: process.env.MICROSERVICE_ID,
  },
  microserviceFunctionGroups: {
    sendNotification: process.env.SEND_NOTIFICATION_FUNCTION_GROUP,
    processData: process.env.PROCESS_DATA_FUNCTION_GROUP,
  },
  loadBalancer: {
    host: "0.0.0.0",
    port: 2000,
  },
} as const;

export default applicationDevelopmentConfig;