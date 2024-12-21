/*
hey there let's go yeah
*/

const chatMessageSections = document.querySelectorAll('section.chat-message.answer');
//sqsiqsiqsiqisqi 
let decryptedChatData = '';

chatMessageSections.forEach(section => {
  const pElement = section.querySelector('p'); // Access the p tag within the shadow DOM
  if (pElement) {
    const decryptedContent = pElement.innerHTML;
    section.innerHTML = decryptedContent; // Replace the section's content with the decrypted content
    decryptedChatData += decryptedContent + '\n'; // Append the decrypted content to the overall chat data
  }
});

// Create a function to copy the decrypted chat data to the clipboard
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

// Add a button or mechanism to trigger the copy function
const copyButton = document.createElement('button');
copyButton.textContent = 'Copy Chat Data';
copyButton.addEventListener('click', () => {
  copyToClipboard(decryptedChatData);
});
document.body.appendChild(copyButton);

const data = {
  decryptedChatData: decryptedChatData
};