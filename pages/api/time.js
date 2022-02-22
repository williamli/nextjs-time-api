// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const now = Date.now()
  console.log({now})
  res.statusCode = 200
  res.json({ now })
}
