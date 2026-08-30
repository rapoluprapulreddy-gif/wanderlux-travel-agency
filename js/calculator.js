document.addEventListener('DOMContentLoaded', () => {
  const tripForm = document.getElementById('tripForm');
  const resultBox = document.getElementById('calcResult');
  const resultText = document.getElementById('resultText');

  if (tripForm) {
    tripForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const destSelect = document.getElementById('destination');
      const selectedOption = destSelect.options[destSelect.selectedIndex];
      const destinationName = selectedOption.value;
      const baseDailyRate = parseFloat(selectedOption.getAttribute('data-rate'));

      const travellers = parseInt(document.getElementById('travellers').value, 10);
      const days = parseInt(document.getElementById('days').value, 10);

      const styleSelect = document.getElementById('style');
      const styleMultiplier = parseFloat(styleSelect.value);
      const styleName = styleSelect.options[styleSelect.selectedIndex].text;

      // Pricing Logic Calculation
      const totalCost = (baseDailyRate * days * travellers) * styleMultiplier;

      // Display Formatted Output
      resultText.textContent = `Estimated cost for ${travellers} traveller(s) to ${destinationName} for ${days} days: $${totalCost.toLocaleString()} - ${styleName}.`;
      resultBox.style.display = 'block';
    });
  }
});