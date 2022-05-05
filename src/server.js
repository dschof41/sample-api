import app from '#src/app'
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Sample API listening on port ${port}`)
})