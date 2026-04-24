export default function handler(req, res) {
  if (req.method === 'GET') {
    const verify_token = 'grupospg_token_2026';
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === verify_token) {
      console.log('WEBHOOK VERIFIED');
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  }

  if (req.method === 'POST') {
    console.log('EVENT RECEIVED:', JSON.stringify(req.body, null, 2));
    return res.sendStatus(200);
  }

  return res.sendStatus(405);
}
