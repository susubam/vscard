const floppyCard = document.getElementById("floppyCard");
const copyEmailButton = document.getElementById("copyEmailButton");
const emailText = document.getElementById("emailText");

floppyCard.addEventListener("click", () => {
  floppyCard.classList.toggle("is-open");
});

copyEmailButton.addEventListener("click", async (event) => {
  event.stopPropagation();

  const email = emailText.textContent.trim();

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.textContent = "이메일 복사완료";

    setTimeout(() => {
      copyEmailButton.textContent = "이메일 저장하기";
    }, 1500);
  } catch {
    alert(`이메일 주소: ${email}`);
  }
});