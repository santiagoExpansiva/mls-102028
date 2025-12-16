/// <mls shortName="ateste" project="102028" enhancement="_blank" />
console.info('projeto de teste');

// Function to calculate age from birth year
function calculateAge(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}