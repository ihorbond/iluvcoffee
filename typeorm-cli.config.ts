import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1668054576379 } from 'src/migrations/1668054576379-CoffeeRefactor';
import { SchemaSync21668056390250 } from 'src/migrations/1668056390250-SchemaSync2';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1668054576379, SchemaSync21668056390250],
});
