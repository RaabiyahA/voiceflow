
function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('YOUR_BACKEND_URL_OR_DROPBOX_API', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
                'Dropbox-API-Arg': JSON.stringify({
                    "path": `/uploads/${file.name}`,
                    "mode": "add",
                    "autorename": true,
                    "mute": false
                }),
                'Content-Type': 'application/octet-stream'
            },
            body: file
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('status').textContent = 'File uploaded successfully!';
            console.log('File uploaded successfully:', data);
        })
        .catch(error => {
            document.getElementById('status').textContent = 'Error uploading file!';
            console.error('Error uploading file:', error);
        });
    } else {
        alert('Please select a file to upload.');
    }
}
