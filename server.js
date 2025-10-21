import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path, { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// ✅ Garante que o Express sirva os arquivos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// Inicializa o banco SQLite
const db = await open({
  filename: "database.db",
  driver: sqlite3.Database
});

// Cria tabela de alunos, se não existir
await db.exec(`
  CREATE TABLE IF NOT EXISTS alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ra TEXT UNIQUE,
    nome TEXT,
    turma TEXT
  );
`);

// Rota de cadastro de aluno
app.post("/api/alunos", async (req, res) => {
  const { ra, nome, turma } = req.body;

  try {
    await db.run("INSERT INTO alunos (ra, nome, turma) VALUES (?, ?, ?)", [ra, nome, turma]);
    res.json({ success: true, message: "Aluno cadastrado com sucesso!" });
  } catch (err) {
    if (err.message.includes("UNIQUE constraint")) {
      res.json({ success: false, message: "Erro: RA já cadastrado!" });
    } else {
      res.json({ success: false, message: "Erro ao cadastrar aluno." });
    }
  }
});

// Rota para listar alunos cadastrados

app.use(express.static(path.join(__dirname, "public")));


app.get("/api/alunos", async (req, res) => {
  const alunos = await db.all("SELECT * FROM alunos");
  res.json(alunos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'registro.html'));
});

app.get('/cardapio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cardapio.html'));
});