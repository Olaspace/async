//Task 02: Awaiting a Call
async function awaitCall() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Simulated API call
        const json = await data.json(); // Wait for the response to be converted to JSON
        console.log(json);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage:
awaitCall();
