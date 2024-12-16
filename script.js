document.getElementById('calculate').addEventListener('click', function () {
    const marathonTime = document.getElementById('marathon').value;
  
    // Example: If the marathon time is filled in, update results
    if (marathonTime) {
      if (isNaN(marathonTime) || marathonTime <= 0) {
        console.error("Please enter a valid marathon time.");
      }

      let totalTime = marathonTime * 60;
      let initTime = totalTime / 26.218;
      let minutesTime = Math.floor(initTime);
      let secondsInitTime = initTime - minutesTime;
      let finalSecondsTime = Math.trunc(60 * secondsInitTime);

      let finalTime = minutesTime + ":" + finalSecondsTime;
      //TODO parse int for any integer time going through




      let paceMinMile = finalTime;
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