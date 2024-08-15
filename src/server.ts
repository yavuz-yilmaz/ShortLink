import dotenv from 'dotenv';
import { app } from './app';
import { sequelize } from './db';

dotenv.config({ path: 'config.env' });

sequelize.sync({ alter: true }).then(() => {
  console.log('Db synced successfully');
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
