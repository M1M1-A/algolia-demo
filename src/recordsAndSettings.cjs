const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
const records = require('./data/products.json')

dotenv.config(); 

const applicationId = process.env.REACT_APP_APPLICATION_ID;
const adminApiKey = process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY;

const client = algoliasearch(applicationId, adminApiKey);
const index = client.initIndex('demo_products');

index.saveObjects(records, {
  autoGenerateObjectIDIfNotExist: true
}).wait();

index.setSettings({
  searchableAttributes: [
    'brand', 'name', 'categories', 'description'
  ],
  customRanking: [
    'desc(popularity)'
  ],
  attributesForFaceting: [
    'categories', 'brand', 'price'
  ]
});



