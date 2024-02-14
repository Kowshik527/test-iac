const axios = require('axios');
const fs = require('fs');

const username = 'Kowshik527';
const repository = 'test-iac';
const filePath = 'main.tf'; // Assuming main.tf is in the root of your repository
const accessToken = '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';

const baseUrl = 'https://api.github.com';
const url = `${baseUrl}/repos/${username}/${repository}/contents/${filePath}`;

const commitMessage = 'Update main.tf'; // Update the commit message as needed

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `token ${accessToken}`
};

// Your frontend values
const instanceType = 't2.micro';
const instanceName = 'my-instance';
const amiId = 'ami-12345678';

// Read main.tf file content
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading main.tf file:', err);
        return;
    }

    // Replace placeholders with values from frontend
    let updatedContent = data.replace('${var.ami_id}', `"${amiId}"`);
    updatedContent = updatedContent.replace('${var.instance_type}', `"${instanceType}"`);
    updatedContent = updatedContent.replace('${var.instance_name}', `"${instanceName}"`);

    const content = Buffer.from(updatedContent).toString('base64'); // Base64 encode the updated file content

    // Get the current file content
    axios.get(url, { headers })
        .then(response => {
            const sha = response.data.sha;
            const contentData = {
                message: commitMessage,
                content: content,
                sha: sha
            };

            // Create a new commit
            return axios.put(url, contentData, { headers });
        })
        .then(response => {
            console.log('main.tf committed successfully:', response.data);
        })
        .catch(error => {
            console.error('Error committing main.tf:', error.response.data);
        });
});
