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

# 13장. 브라우저 보안

- 브라우저 보안 지식을 알고 어플리케이션을 개발한다.

- [공격유형](https://developer.mozilla.org/ko/docs/Web/Security/Attacks#cross-site_scripting_xss)
- [콘텐츠 보안 정책](https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/CSP)
- [동일 출처 정책](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy#%EA%B5%90%EC%B0%A8_%EC%B6%9C%EC%B2%98_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EC%A0%91%EA%B7%BC)

<br>

## 13-1. 크로스 사이트 스크립팅

- 인라인 자바스크립트를 웹 문서에 주입한 공격
- 새니타이즈(Sanitize)로 예방
- HTML 태그를 웹 문서에 주입한 공격
- 이스케이프(Escape)로 예방
- 다른 공격의 기점이 됨.

<br>

## 13-2. 세션 하이재킹

- 웹 어플리케이션의 로그인과 세션 관리
- 인증된 사용자에게 제공되는 맞춤형 HTML
- 쿠키 취약성을 이용한 세션 탈취 공격
- 쿠키 설정으로 예방

<br>

## 13-3. 교차 사이트 요청 위조

- 사용자 권한을 탈취해 악의적인 요청을 보내는 공격
- 쿠키 설정으로 예방
- CSRF 토큰으로 예방
- CAPTCHA로 예방

<br>

## 13-4. 컨텐츠 보안 정책

- Content-Security-Policy 응답 헤더
- CSP의 일반적인 사용 사례
- Content-Security-Policy-Report-Only 헤더 (진단 보고서)
- 사례 탐구: google.com

<br>

## 13-5. 동일 출처 정책

- 브라우저 스스로 자원 출처를 관리하는 보안 정책
- 적용 대상: AJAX, 웹 폰트
- CSP와 SOP 비교
- 균형

<br>

## 13-6. 중간 정리

- 크로스 사이트 스크립팅 공격의 원리와 예방 방법
- 다양한 공격들: 세션 하이재킹, CSRF
- CSP와 SOP
