import * as SQLite from "expo-sqlite";

// const db = await SQLite.openDatabaseAsync("userGeo");

///Initialisation
//   "expo-sqlite": "~14.0.6"

// export const sqliteINit = () => {
//     const initPromise = new Promise((resolve, reject) => {
//         db.withTransactionSync(tx => {
//             tx.excu
//         })
//     })
// }

// INSERT INTO test (value, intValue) VALUES ('test1', 123);
// INSERT INTO test (value, intValue) VALUES ('test2', 456);
// INSERT INTO test (value, intValue) VALUES ('test3', 789);

// await db.execAsync(
//   `CREATE TABLE IF NOT EXISTS userGeo (id INTEGER KEY NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL);`
// );

// await db.execAsync(`
//     PRAGMA journal_mode = WAL;
//     CREATE TABLE IF NOT EXISTS userGeo (id INTEGER PRIMARY KEY NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL);
//     `);

export const sqliteInit = async () => {
  const db = await SQLite.openDatabaseAsync("userGeo");

  await db.withTransactionAsync(new Promise((resolve, reject) => {}));
};

export const sqliteINit = async () => {
  const db = await SQLite.openDatabaseAsync("userGeo");

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS userGeo (id INTEGER PRIMARY KEY NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL);
    `);
  return db;
};

export const addUserGeo = async (latitude, longitude) => {
  const db = await SQLite.openDatabaseAsync("userGeo");
  // await db.transactionAsync(async tx => {
  //     await tx.executeAsync('INSERT INTO userGeo (latitude, longitude) VALUES (?,?)', 48.866667, 2.333333);
  // });
  const result = await db.runAsync(
    "INSERT INTO userGeo (latitude, longitude) VALUES (?, ?)",
    latitude,
    longitude
  );
  console.log(result.lastInsertRowId, result.changes);
  return result;
};

export const fetchInSLite = async () => {
  const db = await SQLite.openDatabaseAsync("userGeo");

  const allRows = await db.getAllAsync("SELECT * FROM userGeo");
  return allRows;
};
