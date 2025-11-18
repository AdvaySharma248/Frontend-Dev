document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const table = document.getElementById('studentTable');
    const noResults = document.getElementById('noResults');
    
    searchInput.addEventListener('input', filterTable);
    
    function filterTable() {
        const searchTerm = searchInput.value.toLowerCase();
        const rows = table.getElementsByTagName('tr');
        let hasResults = false;
        
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.getElementsByTagName('td');
            let rowContainsSearchTerm = false;
            
            for (let j = 0; j < cells.length; j++) {
                const cellText = cells[j].textContent.toLowerCase();
                if (cellText.includes(searchTerm)) {
                    rowContainsSearchTerm = true;
                    hasResults = true;
                    break;
                }
            }
            
            row.style.display = rowContainsSearchTerm ? '' : 'none';
        }
        
        noResults.style.display = hasResults ? 'none' : 'block';
    }
});