require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { MongoClient } = require('mongodb');

const S3_DOMAIN = process.env.AWS_S3_DOMAIN || '';
const BUCKET = process.env.AWS_BUCKET_NAME || '';
const S3_ENDPOINT = S3_DOMAIN ? `https://${S3_DOMAIN.split('/')[0]}` : '';

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'SIN',
  endpoint: S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
  forcePathStyle: true,
});

const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB_NAME || 'ubhi-prod';

const assetsDir = path.join(__dirname, '../public/assets');
const excludeFiles = ['favicon.svg', 'ubhi-logo-transparent.png', 'api.js'];

async function run() {
  console.log('Connecting to MongoDB...');
  const client = new MongoClient(mongoUrl);
  await client.connect();
  const db = client.db(dbName);
  console.log('Connected to MongoDB database:', dbName);

  const files = fs.readdirSync(assetsDir);
  const mapping = {};

  for (const file of files) {
    if (excludeFiles.includes(file)) {
      console.log(`Skipping excluded file: ${file}`);
      continue;
    }
    const filePath = path.join(assetsDir, file);
    if (fs.statSync(filePath).isDirectory()) continue;

    console.log(`Uploading ${file} to Contabo S3...`);
    const fileBuffer = fs.readFileSync(filePath);
    
    // Determine ContentType
    let contentType = 'image/png';
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      contentType = 'image/jpeg';
    } else if (file.endsWith('.svg')) {
      contentType = 'image/svg+xml';
    }

    const key = `assets/${file}`;
    
    const command = new PutObjectCommand({
      Bucket: BUCKET.split('/').pop(),
      Key: key,
      Body: fileBuffer,
      ContentType: contentType,
      ACL: 'public-read',
    });

    await s3.send(command);
    const publicUrl = `https://${S3_DOMAIN}/${key}`;
    mapping[`assets/${file}`] = publicUrl;
    console.log(`Uploaded successfully! URL: ${publicUrl}`);
  }

  console.log('Uploading mappings completed. Starting database migration...');

  // Update workshops collection
  console.log('Updating workshops collection...');
  const workshops = await db.collection('workshops').find({}).toArray();
  for (const workshop of workshops) {
    let img = workshop.image;
    if (img && mapping[img]) {
      await db.collection('workshops').updateOne(
        { _id: workshop._id },
        { $set: { image: mapping[img] } }
      );
      console.log(`Updated workshop: ${workshop.title} image -> ${mapping[img]}`);
    }
  }

  // Update products collection
  console.log('Updating products collection...');
  const products = await db.collection('products').find({}).toArray();
  for (const product of products) {
    let img = product.image;
    if (img && mapping[img]) {
      await db.collection('products').updateOne(
        { _id: product._id },
        { $set: { image: mapping[img] } }
      );
      console.log(`Updated product: ${product.name} image -> ${mapping[img]}`);
    }
  }

  // Update siteContent collection
  console.log('Updating siteContent collection...');
  const siteContent = await db.collection('siteContent').find({}).toArray();
  for (const doc of siteContent) {
    let docStr = JSON.stringify(doc);
    let updated = false;
    for (const [localPath, s3Url] of Object.entries(mapping)) {
      if (docStr.includes(localPath)) {
        docStr = docStr.split(localPath).join(s3Url);
        updated = true;
      }
    }
    if (updated) {
      const updatedDoc = JSON.parse(docStr);
      delete updatedDoc._id; // prevent immutable field error
      await db.collection('siteContent').replaceOne({ _id: doc._id }, updatedDoc);
      console.log(`Updated siteContent document: ${doc.type}`);
    }
  }

  await client.close();
  console.log('Migration completed successfully!');
}

run().catch(console.error);
