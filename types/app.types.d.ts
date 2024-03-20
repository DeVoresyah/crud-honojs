declare global {
  // type EnvSchema = Record<string, string>;
  type EnvSchema = {
    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
  };
}

export {};
