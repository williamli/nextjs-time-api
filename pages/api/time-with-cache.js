// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Cache-control', 'public, max-age=0, s-maxage=600, immutable, stale-while-revalidate')
  res.json({ now: Date.now() })
}
