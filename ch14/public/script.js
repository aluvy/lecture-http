const init = async () => {
  // const res = await fetch('http://localhost:3001/resource.json');

  // custom header 요청 (안전하지 않은 헤더 테스트)
  const res = await fetch('http://localhost:3001/resource.json', {
    headers: {
      'X-Foo': 'foo',
    },
  });

  const data = await res.text();
  const jsonEl = document.createElement('pre');
  jsonEl.textContent = data;
  document.body.appendChild(jsonEl);
};

document.addEventListener('DOMContentLoaded', init);
