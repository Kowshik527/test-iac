const axios = require('axios');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const username = 'Kowshik527';
const repository = 'test-iac';
const variablesFilePath = 'variables.tf'; // Change file path to variables.tf
const accessToken = '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';

const baseUrl = 'https://api.github.com';
const url = `${baseUrl}/repos/${username}/${repository}/contents/${variablesFilePath}`;

const commitMessage = 'Update variables.tf'; // Update the commit message as needed

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `token ${accessToken}`
};

// Read variables.tf file content and update variables
app.post('/updateVariablesTf', (req, res) => {
    const { instanceType, instanceName, amiId } = req.body;
    fs.readFile(variablesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading variables.tf file:', err);
            res.status(500).send('Internal server error');
            return;
        }

        let updatedContent = data.replace('${var.ami_id}', `${amiId}`);
        updatedContent = updatedContent.replace('${var.instance_type}', `${instanceType}`);
        updatedContent = updatedContent.replace('${var.instance_name}', `${instanceName}`);

        const content = Buffer.from(updatedContent).toString('base64');

        axios.get(url, { headers })
            .then(response => {
                const sha = response.data.sha;
                const contentData = {
                    message: commitMessage,
                    content: content,
                    sha: sha
                };

                return axios.put(url, contentData, { headers });
            })
            .then(response => {
                console.log('variables.tf committed successfully:', response.data);
                res.status(200).send('variables.tf updated successfully');
            })
            .catch(error => {
                console.error('Error committing variables.tf:', error.response.data);
                res.status(500).send('Error updating variables.tf');
            });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
