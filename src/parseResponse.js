import bodyParser from 'body-parser';

export default function parseResponse(app) {
  app.use(bodyParser.urlencoded({ extend: false }));
  app.use(bodyParser.json());
}
