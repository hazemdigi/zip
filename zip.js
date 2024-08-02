var userZipCode;

function fetchZipCode() {
  fetch('https://ipinfo.io/json?token=3d1307c95696e4')
    .then(response => response.json())
    .then(data => {
      if (data.postal) {
        userZipCode = data.postal;
        console.log(userZipCode);
        (window._rgba_tags = (window._rgba_tags || [])).push({ "zip": userZipCode });
      } else {
        fetchZipCodeFallback();
      }
    })
    .catch(error => {
      console.error(error);
      fetchZipCodeFallback();
    });
}

function fetchZipCodeFallback() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      userZipCode = data.postal;
      console.log(userZipCode);
      (window._rgba_tags = (window._rgba_tags || [])).push({ "zip": userZipCode });
    })
    .catch(error => {
      console.error(error);
    });
}

setTimeout(fetchZipCode, 2000);