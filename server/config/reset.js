import { pool } from "../config/database.js";
import "./dotenv.js";
import shardbearerData from "../data/shardbearers.js";

const createShardbearersTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS shardbearers;

    CREATE TABLE IF NOT EXISTS shardbearers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      greatRune TEXT NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 shardbearers table created successfully");
  } catch (err) {
    console.error("⚠️ error creating shardbearers table", err);
  }
};

const seedShardbearersTable = async () => {
  await createShardbearersTable();

  shardbearerData.forEach((shardbearer) => {
    const insertQuery = {
      text: "INSERT INTO shardbearers (name, greatRune, image) VALUES ($1, $2, $3)",
    };

    const values = [shardbearer.name, shardbearer.greatRune, shardbearer.image];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting shardbearer", err);
        return;
      }
      console.log(`✅ ${shardbearer.name} added successfully`);
    });
  });
};

seedShardbearersTable();
