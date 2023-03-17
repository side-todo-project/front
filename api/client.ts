

export const setNickname = (client) => { 
  const nickname = client.nickname;
  const nicknameEl = document.querySelector('.nickname');
  nicknameEl.textContent = nickname;
}