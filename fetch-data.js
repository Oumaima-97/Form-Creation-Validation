// Function to fetch and display user data
async function fetchUserData() {
    // Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data
        const response = await fetch(apiUrl);

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create user list
        const userList = document.createElement('ul');

        // Loop through users and add each name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append user list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by displaying an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
