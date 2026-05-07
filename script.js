document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('fullMenu').classList.add('active');
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('fullMenu').classList.remove('active');
  });