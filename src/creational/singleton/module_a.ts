import { MyDatabaseModule } from "./db/my-database-module";

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({name: 'Gabriel', age: 19});
myDatabaseClassic.add({name: 'Antônio', age: 22});
myDatabaseClassic.add({name: 'Bruno', age: 24});
myDatabaseClassic.add({name: 'Aram', age: 40});

export { myDatabaseClassic };