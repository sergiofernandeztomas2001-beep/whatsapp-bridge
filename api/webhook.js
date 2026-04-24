export default function handler(req, res) {
  if (req.method === 'GET') {
    const challenge = req.query['hub.challenge'];

    console.log('META VERIFY QUERY:', req.query);

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-store');

    if (challenge) {
      return res.status(200).end(String(challenge));
    }

    return res.status(200).end('OK');
  }

  if (req.method === 'POST') {
    console.log('WHATSAPP EVENT:', JSON.stringify(req.body, null, 2));
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).end('OK');
  }

  res.setHeader('Content-Type', 'text/plain');
  return res.status(200).end('OK');
}
