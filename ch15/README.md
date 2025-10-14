# 05. 보안

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/11/lecture-http-part5

<hr>

- 브라우저 보안과 함께 HTTP 통신을 더 안전하게 만드는 LTS
- 13장. 브라우저 보안
  - XSS (크로스 사이트 스크립팅)와 같은 공격 기법과 이를 방지하기 위한 브라우저 보안정책
- 14장. CORS
  - 외부 도메인의 자원을 안전하게 활용하기 위한 CORS 정책과 적용 방법
- 15장. HTTPS
  - HTTPS가 네트워크 보안을 강화하는 방식과 TLS의 역할

<br>

# 15장. HTTPS

<br>

## 15-1. 해시

- 해시함수
- 해시 값(다이제스트) 특징: 고정 길이, 고유성, 변경 불가, 단방향
- 대표적인 해시 함수: MD5

<br>

## 15-2. 암호화

- 해시 함수의 한계
  - 복호화 불가: 변경한 값을 원래 값으로 복구할 수 없음
- 특징: 암호화, 복호화, 키
  - 암호화 키와 복호화 키가 같으면 '대칭키 암호화'
  - 암호화 키와 복호화 키가 다르면 '비대칭키 암호화'
- 대표적인 암호화 알고리즘: AES

<br>

## 15-3. 비대칭키 암호화

- 대칭키 암호화의 한계
  - 키 관리가 어려움
  - 무결성 부족
- 특징: 서로 다른 키, 공개키(암호화 할 때 사용), 개인키(복호화 할 때 사용), 신분 증명
- 비대칭 키의 대표적인 알고리즘: RSA

```shell
# 개인키 생성
$ openssl genpkey -algorithm RSA -out private_key.pem

# 공개키 생성
$ openssl rsa -putout -in private_key.pem -out public_key.pem

# 공개키로 암호화
$ echo "Hello World" | openssl rsautl -encrypt -inkey public_key.pem -pubin -out encrypted

# 개인키로 복호화
$ cat encrypted | openssl rsautl -decrypt -inkey private_key.pem
```

- 암호화 방식 비교: 해시 함수, 대칭키 암호화, 비대칭키 암호화

<br>

## 15-4. 디지털 서명

- 디지털 서명의 원리: 해시 함수 사용, 개인키로 서명, 평문과 서명 전달, 서명의 유효성 검증
- 디지털 서명 실습

<br>

## 15-5. 디지털 인증서

- 디지털 인증서 원리
- 디지털 인증서 사례

<br>

## 15-6. TLS

- 1단계: TLS 핸드쉐이크
- 2단계: 데이터 전송

<br>

## 15-7. HTTPS 서버 제작

- 디지털 인증서 생성
- 인증서로 HTTPS 서버 제작

<br>

## 15-8. 중간 정리

- 해시 함수로 평문을 요약할 수 있다.
- 암호화로 평문을 암호화 및 복호화 할 수 있다.
- 비대칭키 암호화로 더 안전하게 암복호화 할 수 있다.
- 비대칭키 암호화와 해시함수를 이용해 디지털 서명을 만들 수 있다.
- 디지털 서명을 이용한 디지털 인증서로 서버의 신원을 확인할 수 있다.
- 디지털 인증서를 이용해 보안 프로오콜인 TLS를 구현할 수 있다.
