export default function handler(req, res) {
  if (req.method === 'GET') {
    const challenge = req.query['hub.challenge'];

    if (challenge) {
      res.setHeader('Content-Type', 'text/plain');
      return res.status(200).end(challenge);
    }

    return res.status(200).end('');
  }

  if (req.method === 'POST') {
    return res.status(200).end('OK');
  }

  return res.status(200).end('');
}
