document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("click").addEventListener("click", searchlocation);
  });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("detect").addEventListener("click", getip);
  });

// TO FIX THE FACT THAT CHROME EXTENSIONS DONT ALLOW INLINE SCRIPT (CANT USE onclick= IN HTML THIS NEED THIS)
// https://stackoverflow.com/questions/13591983/onclick-or-inline-script-isnt-working-in-extension

