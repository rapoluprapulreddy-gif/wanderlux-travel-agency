// Trip calculator logic for WanderLux
// Calculates estimate based on days, travelers, and selected package level

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('tripForm');
  var resultBox = document.getElementById('calcResult');
  var resultMsg = document.getElementById('resultText');

  // Skip script if form isn't present
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Grab dropdown option and rate
    var dest = document.getElementById('destination');
    var selected = dest.options[dest.selectedIndex];
    var rate = parseFloat(selected.getAttribute('data-rate'));

    // Inputs
    var numPeople = parseInt(document.getElementById('travellers').value, 10);
    var numDays = parseInt(document.getElementById('days').value, 10);
    
    var style = document.getElementById('style');
    var multiplier = parseFloat(style.value);
    var styleLabel = style.options[style.selectedIndex].text;

    // Quick sanity check for empty or broken numbers
    if (!selected.value || isNaN(rate)) {
      alert('Please pick a destination from the list.');
      return;
    }

    if (!numPeople || numPeople < 1) {
      alert('Please enter at least 1 traveller.');
      return;
    }

    if (!numDays || numDays < 1) {
      alert('Trip duration must be at least 1 day.');
      return;
    }

    // Cost formula: base daily rate * days * travellers * package tier
    var total = (rate * numDays * numPeople) * multiplier;

    // Build quote output string
    var textOutput = 'Estimated cost for ' + numPeople + ' traveller(s) to ' + selected.value + 
                     ' for ' + numDays + ' days: $' + total.toLocaleString('en-US') + ' - ' + styleLabel + '.';

    // Display box
    resultMsg.textContent = textOutput;
    resultBox.style.display = 'block';

    // Scroll down to result if on mobile view
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});