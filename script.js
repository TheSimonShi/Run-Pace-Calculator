document.getElementById('calculate').addEventListener('click', function () {
    const marathonTime = document.getElementById('marathon').value;
  
    // Example: If the marathon time is filled in, update results
    if (marathonTime) {
      const paceMinMile = "8:00"; // Placeholder pace for demo
      const paceMinKm = "4:58"; // Placeholder pace for demo
      const speedMph = "7.5"; // Placeholder speed for demo
      const speedKph = "12.1"; // Placeholder speed for demo
  
      // Update text in the results section
      document.getElementById('pace-min-mile').textContent = paceMinMile;
      document.getElementById('pace-min-km').textContent = paceMinKm;
      document.getElementById('speed-mph').textContent = speedMph;
      document.getElementById('speed-kph').textContent = speedKph;
    } else {
      alert('Please enter a marathon time.');
    }
  });
  