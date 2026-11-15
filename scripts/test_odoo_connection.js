/**
 * Odoo JSON-RPC Connection & Health Check Script
 * Group 6 - BSA Project (OfficePro Distribution Co., Ltd.)
 * 
 * Usage:
 *   node scripts/test_odoo_connection.js [URL] [DB] [USERNAME] [PASSWORD_OR_APIKEY]
 */

const https = require('https');
const http = require('http');

async function testOdoo(odooUrl = 'https://officepro-distribution-co-ltd2.odoo.com') {
  console.log(`\n--- TESTING ODOO ERP INSTANCE: ${odooUrl} ---`);
  
  const parsed = new URL(odooUrl);
  const client = parsed.protocol === 'https:' ? https : http;

  const req = client.request({
    hostname: parsed.hostname,
    port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
    path: '/web/database/list',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`HTTP Status: ${res.statusCode} ${res.statusMessage}`);
      if (res.statusCode === 200) {
        console.log('✅ Instance is reachable.');
        try {
          const json = JSON.parse(data);
          console.log('Databases available:', json.result || 'Restricted on SaaS Cloud');
        } catch (e) {
          console.log('Response body preview:', data.substring(0, 150));
        }
      } else if (res.statusCode === 404 || res.statusCode === 302 || res.statusCode === 303) {
        console.log(`ℹ️ Redirect / SaaS Trial Status: ${res.headers.location || 'Expired or Moved'}`);
      }
    });
  });

  req.on('error', (err) => {
    console.error(`❌ Connection failed: ${err.message}`);
  });

  req.write(JSON.stringify({
    jsonrpc: '2.0',
    method: 'call',
    params: {}
  }));
  req.end();
}

const target = process.argv[2] || 'https://officepro-distribution-co-ltd2.odoo.com';
testOdoo(target);
