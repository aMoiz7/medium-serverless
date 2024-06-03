import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/extension'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()

app.get('/', (c) => {
 const prisma = new PrismaClient({
  datasourceUrl :env.DATABASE_URL,
 }).$extents(withAccelerate())
 return c.text('Hellow Hono !')
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