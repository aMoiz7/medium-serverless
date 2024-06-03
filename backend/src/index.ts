import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app


app.post('/api/vi/signup' , (c)=>{
  return c.text("signup user")
})

app.post('/api/vi/signin' , (c)=>{
  return c.text("signup user")
})
app.post('/api/vi/blog' , (c)=>{
  return c.text("signin user")
})
app.put('/api/vi/blog' , (c)=>{
  return c.text("blog user")
})
app.get('/api/vi/blog/:id' , (c)=>{
  return c.text(" user id" )
})