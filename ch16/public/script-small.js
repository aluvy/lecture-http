console.log('script-small.js');

foo(); // Async 로 호출하면 에러 발생

performance.mark('script-small-end');
performance.measure('script-small excution time', 'script-small-start', 'script-small-end');
