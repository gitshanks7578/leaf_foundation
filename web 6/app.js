



let sidebar_btn = document.querySelector(".sidebar_logo");
let phone_nav = document.querySelector(".phone_nav");
let close_btn = document.querySelector(".close");

let sidebar_links = document.querySelector(".phone_navlinks ul li");

sidebar_btn.addEventListener("click", () => {
    // phone_nav.classList.toggle('hide');
    phone_nav.classList.toggle('active');
})
close_btn.addEventListener("click", () => {
    phone_nav.classList.toggle('active');
})




const container = document.querySelector('.leaves');

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    // random position, size & animation
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = (5 + Math.random() * 5) + "s";
    leaf.style.width = (15 + Math.random() * 15) + "px";
    leaf.style.height = (20 + Math.random() * 20) + "px";
    leaf.style.background = `hsl(${100 + Math.random() * 60}, 60%, 40%)`; // diff green shades

    container.appendChild(leaf);

    // remove after animation ends
    setTimeout(() => {
        leaf.remove();
    }, 10000);
}

// keep spawning leaves
setInterval(createLeaf, 400);




  emailjs.init("2otRmgR8jXe0gYRn7");

  // Attach form submit event
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stops page reload
    sendMail();         // call sendMail() when form is submitted
  });

  function sendMail() {
    let parms = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_6w3zu74", "template_i4ohqxg", parms)
      .then(() => {
        alert("Email sent!");
        document.getElementById("contactForm").reset(); // clear form
      })
      .catch((err) => {
        console.error("Failed:", err);
        alert("Failed to send email.");
      });
  }




  //sheet db


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  // collect form data
  let data = {
    data: [
      {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }
    ]
  };

  // send to SheetDB
  fetch("https://sheetdb.io/api/v1/e6kc9or98jh1z", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    // alert("Message sent to Google Sheet!");
    document.getElementById("contactForm").reset(); // clear form
  })
  .catch(err => {
    console.error("Error:", err);
    alert("Failed to send data.");
  });
});

