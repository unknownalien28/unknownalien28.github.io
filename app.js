// Replace these with your actual keys from Supabase Settings > API
const supabaseUrl = 'https://your-project-id.supabase.co'
const supabaseKey = 'your-anon-key-here'
const _supabase = supabase.createClient(supabaseUrl, supabaseKey)

async function getJerseys() {
    const { data, error } = await _supabase
        .from('jerseys')
        .select('*')

    const container = document.getElementById('product-container')
    
    if (error) {
        console.error('Teleportation failed:', error)
        return
    }

    // This creates the HTML for each jersey automatically
    container.innerHTML = data.map(kit => `
        <div class="kit-card">
            <img src="${kit.image_url}" alt="${kit.name}" style="width:100%; border-radius:10px;">
            <h3 class="glow-text">${kit.name}</h3>
            <p>${kit.description}</p>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span>$${kit.price}</span>
                <button class="buy-btn">Acquire</button>
            </div>
        </div>
    `).join('')
}

// Run the function when the page loads
getJerseys()