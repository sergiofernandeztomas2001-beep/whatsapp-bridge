export default function handler(req, res) {
  if (req.method === 'GET') {
    const challenge = req.query['hub.challenge'];

    if (challenge) {
      return res.status(200).send(challenge);
    }

    return res.status(200).send('OK');
  }

  if (req.method === 'POST') {
    console.log('EVENT RECEIVED:', JSON.stringify(req.body, null, 2));
    return res.status(200).send('OK');
  }

  return res.status(405).send('Method Not Allowed');
}
