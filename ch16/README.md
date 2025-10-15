# 06. 성능

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/12/lecture-http-part6

<hr>

- 브라우저가 웹 페이지를 렌더링할 때 발생하는 HTTP 요청을 효율적으로 제어하는 다양한 기법
- 16장. 렌더링 최적화
  - 외부 리소스의 로드 시점을 제어해 웹 성능을 최적화하는 기술
- 17장. 캐시
  - 서버와 브라우저가 HTTP 헤더를 통해 캐싱 정책을 주고받아 성능을 최적화하는 메커니즘

<br>

# 16장. 로딩 최적화

- https://developer.mozilla.org/ko/docs/Web/Performance/Guides/Critical_rendering_path
- https://ko.javascript.info/script-async-defer
- https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Attributes/rel/preload
- https://developer.mozilla.org/ko/docs/Glossary/Prefetch
- https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/img

<br>

## 16-1. 렌더링 과정

- DSN 질의
- HTML 문서 획득
- 주요 렌더링 경로 (Critical Rendering Path, CRP)
- 파싱을 차단하는 HTTP 요청

렌더링 순서

1. 파싱 : 코드를 한 줄 씩 읽으면서 브라우저에게 의미있는 단위로 쪼개는 작업 수행
2. COM / CSSOM
3. 렌더트리
4. 레이아웃
5. 페인팅

<br>

## 16-2. script 태그의 렌더링 영향도

- 웹 서버 준비
- 자바스크립트를 로딩하는 웹 문서 준비
- 응답 지연 기능 추가
- PerformanceAPI로 정확한 시간 측정

<br>

## 16-3. Async

파싱과 동시에 파일을 다운로드

- 파싱과 동시에 파일을 다운로드하는 방법
- 다운로드 완료한 순서대로 실행한다.
- DOM에 무관하거나 서로 영향을 주지 않는 스크립트에 적합, 광고나 분석 트래커

```html
<script src="script-big.js" async></script>
```

<br>

## 16-4. Defer

파싱과 동시에 파일을 다운로드 + **실행은 하지 않고 기다린다.**  
코드에 정의 된 순서대로 스크립트를 실행한다.

- 순서대로 실행해야하는 스크립트
- **미리 다운로드한 뒤 실행 순서를 보장하는 방법**
- 서로 의존하는 스크립트에 적합

```html
<script src="script-big.js" defer></script>
```

<br>

## 16-5. Preload

- 웹문서에 필요한 자원을 미리 다운로드하는 방법
- 용량이 큰 이미지를 다운로드하는 상황
- 클릭과 동시에 이미지가 렌더링되도록 개선
- 이미지, 비디오, 스타일시트, 폰트, 자바스크립트 등에 활용

```html
<link rel="preload" href="cat.jpg" as="image" />
```

<br>

## 16-6. Prefetch

- **다음 페이지에서 사용할 자원을 미리 다운로드**하는 방법
- 용량이 큰 다음 페이지로 이동하는 상황
- 링크 이동과 동시에 페이지가 렌더링되도록 개선
- 다음 문서의 렌더링 성능을 높일 때 활용

```html
<link rel="prefetch" href="index-next.html" as="html" />
```

- link prefetch는 아직 모든 브라우저에서 동작하지 않는다.
- 어플리케이션의 브라우저 지원 범위를 고려하면서 사용해야 한다.
- https://caniuse.com/?search=link+prefetch

<br>

## 16-7. 이미지 지연 로딩

- 브라우저가 img 태그의 이미지를 다운로드하는 시점
- 뷰 포트 안에 이미지만 다운로드하고 **밖에 있는 이미지는 지연 로딩**
- 이미지가 많은 사진첩이나 블로그에서 활용

```html
<img src="dog.jpg" alt="dog" loading="lazy" />
```

<br>

## 16-8. 중간 정리

- 주요 렌더링 경로에서 추가적인 HTTP 요청은 성능에 영향을 준다.
- **Async** 속성으로 자바스크립트를 비동기로 다운로드 할 수 있다.
- **Defer** 속성으로 자바스크립트의 실행 순서를 보장할 수 있다.
- **Preload** 로 웹 페이지에 필요한 자원을 미리 다운로드할 수 있다.
- **Prefetch** 로 다음 페이지에 필요한 자원을 미리 다운로드 할 수 있다.
- **loading="lazy"** 로 img 태그로 로딩하는 이미지는 지연 로딩할 수 있다.
