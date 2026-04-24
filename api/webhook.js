export default function handler(req, res) {
  if (req.method === 'GET') {
    const verifyToken = 'spg2026';
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (token === verifyToken && challenge) {
      return res.status(200).send(challenge);
    }

    return res.status(403).send('Forbidden');
  }

  if (req.method === 'POST') {
    console.log('EVENT RECEIVED:', JSON.stringify(req.body, null, 2));
    return res.status(200).send('OK');
  }

  return res.status(405).send('Method Not Allowed');
}
