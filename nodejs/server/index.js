const express = require('express')
const mysql = require('mysql')
const util = require('util');

// ======================= functions ======================= //

const generateRandonName = () => {
  const nameList = ["Alice", "Laura", "Beatriz", "Manuela", "Helena", "Maria Eduarda", "Isabela", "Valentina", "Júlia", "Sophia", "Artur", "Matheus", "Bernardo", "Miguel", "Davi", "Gael", "Gabriel", "Rafael", "Lucas", "Theo"]
  const randomIndex = Math.floor(Math.random()*nameList.length)
  return nameList[randomIndex]
}

// ======================= mySql ======================= //

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
})
// node native promisify
const query = util.promisify(connection.query).bind(connection);

// ======================= express ======================= //

const expressConfig = {
  port: 3000
}

const app = express()

app.get('/', async (req, res) => {
  let html = '<h1>Full Cycle</h1>'

  await query(`INSERT INTO people(name) values("${generateRandonName()}")`)  
  const dbData = await query(`SELECT * FROM people`)
  if (dbData.length) {
    html += dbData.map(r => `<li>id: ${r.id} - name: ${r.name}</li>`)
  }

  res.send(html)
})

app.listen(expressConfig.port, () => console.log(`node listening to port ${expressConfig.port}`))


 