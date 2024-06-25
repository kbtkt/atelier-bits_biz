function onSubmit(token) {
  console.log("reCAPTCHA token:", token);
  const form = document.getElementById("contactForm");
  if (form.reportValidity()) {
    form.submit();
  }
}
window.onSubmit = onSubmit;
