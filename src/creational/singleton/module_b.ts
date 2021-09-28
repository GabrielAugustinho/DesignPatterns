import { MyDatabaseModule } from "./db/my-database-module";
// Singleton na prática, tudo que criei anteriormente consegue ser transmitido para a prática
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({name: 'Regina', age: 19});
myDatabaseClassic.add({name: 'André', age: 22});
myDatabaseClassic.add({name: 'Gabriella', age: 24});
myDatabaseClassic.add({name: 'Roberto', age: 40});
myDatabaseClassic.remove(3);
myDatabaseClassic.show();