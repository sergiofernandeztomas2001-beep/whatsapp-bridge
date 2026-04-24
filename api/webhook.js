export default function handler(req, res) {
  if (req.method === 'GET') {
    const challenge = req.query['hub.challenge'];

    console.log('VERIFY QUERY:', req.query);

    if (challenge) {
      return res.status(200).send(String(challenge));
    }

    return res.status(200).send('OK');
  }

  if (req.method === 'POST') {
    console.log('EVENT RECEIVED:', JSON.stringify(req.body, null, 2));
    return res.status(200).send('OK');
  }

  return res.status(200).send('OK');
}
