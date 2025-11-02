// Asynchronous function to fetch and display user data
async function fetchUserData() {
    // Step 1: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 2: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 3: Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 4: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 5: Create a list to display user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 6: Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 8: Invoke the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
