//Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

// Example usage:
awaitCall();
