// this function will handle redirecting the user to a post based on the category clicked 
async function categorySearch(event) {
    // Extract the category name from the element that was clicked
    const categoryName = this.value;
    console.log(categoryName);
    if (categoryName) {
        // gets data for category
        // NOTE this route may need /api to be changed
        const response = await fetch(`/api/post/category/${categoryName}`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok) {
            // NOTE this may need a different route or need to be .reload instead of .replace
            document.location.replace('/posts-by-category')
        }
    }
}



document.queryCommandIndeterm('.search-by-category').on('click', categorySearch);