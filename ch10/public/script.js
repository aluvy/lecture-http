const longPollServer = async () => {
  const response = await fetch('/longPoll');

  if (response.status == 408) {
    longPollServer(); // 재요청
    return;
  }

  const message = await response.json();
  render(message);

  longPollServer(); // 재요청
};

const render = (message) => {
  const messageElement = document.createElement('div');
  const { text } = message;
  const timestamp = new Date(message.timestamp).toLocaleDateString();
  messageElement.textContent = `${text} (${timestamp})`;
  document.body.appendChild(messageElement);
};

const init = () => {
  longPollServer();
};

document.addEventListener('DOMContentLoaded', init);
