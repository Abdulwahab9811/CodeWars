// Step 1: Create the fetchUserData function
function fetchUserData() {
    return new Promise((resolve, reject) => {
        // Simulate network delay (2 seconds)
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% chance of success
            if (success) {
                resolve({
                    id: 1,
                    name: "John Doe",
                    email: "john.doe@example.com"
                });
            } else {
                reject("Failed to fetch user data");
            }
        }, 2000);
    });
}

// Step 2: Use fetchUserData and handle the Promise
fetchUserData()
    .then((userData) => {
        console.log("User Data:", userData);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Data fetch attempt complete.");
    });
