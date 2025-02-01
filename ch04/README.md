# cookie

요청 헤더의 cookie 값을 감지하여 클라이언트의 재방문 여부를 확인한다.

## 도메인 공유
- 해당 도메인에서도 같은 쿠키를 공유한다.
```javascript
res.setHeader('Set-Cookie', 'sid=1; Domain=mysite.com');
```

## 경로
- 해당 path 에만 쿠키를 싣는다.
```javascript
res.setHeader('Set-Cookie', 'sid=1; path=/private');
```

## 쿠키 생명주기
- 쿠키의 수명을 지정한다. (예제 에서는 10초로 설정 함)
- 쿠키 값을 확인해 보면 디테일한 시간으로 설정 되어 있다.
- 특정 일을 설정하려면 Expries 를 사용하면 된다.
```javascript
res.setHeader('Set-Cookie', 'sid=1; Max-Age=10');
```

## 쿠키 보안
- 쿠키는 평문이라 유출될 수 있어 보안에 위험하다.
- Secure 값을 추가하면 https 요청에서만 쿠키를 실으라는 명령이다.
```javascript
res.setHeader('Set-Cookie', 'sid=1; Secure;');
```

### https
- 로컬에서 https 요청을 사용하려면 인증 키를 받아야 한다.
- ch04/https-server 폴더에 인증키를 발급받아 보자.
```shell
$ cd ch04/https-server
$ openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
- 그러면 https-server 폴더에 server.cert 파일과 server.key 파일이 만들어진다.
  - cert: 인증서
  - key: private key

## javascript에서 쿠키 접근 차단
- document.cookie 로의 접근 및 수정 차단
```javascript
res.setHeader('Set-Cookie', 'sid=1; HttpOnly;');
```