# HTML

## 웹 브라우저 : 인터넷 화면을 보여주는 프로그램

- Chrome, Fire Fox, Safari, Opera, Edge, Brave ..
- 사용자가 사용하는 브라우저는 정해져 있지 않으며 
  브라우저마다 화면이 다르게 출력이 될 수 있으니 
  브라우저마다 테스트를 하면서 수정하는것이 원칙
  => 크로스 브라우징

## 웹 페이지 개발 방법

- 구조 (Struckture) : HTML
- 표현 (Presentation) : CSS
- 동작 (Behavior) : JavaScript

## HTML (Hyper Text Markup Language)

- 웹 문서 / HTML 문서 / HTML 페이지 로도 불림

## 웹 페이지 생성

- 확장자는 .html 간혹 .htm도 있음
- 처음 보여지는 메인 화면의 파일 이름은 "index.html" -> 무조건 고정

## main page, sub page

- main page : index.html로 기재
- sub page : index.html 제외 '파일명.html' 파일들

## 태그 <>

```
형식 : <태그명 속성="값"></태그명>
```

1. "<"와 ">" 사이에 명령어(tag, element) 작성
2. 시작태그<>와 종료태그</>로 구성
3. 종료태그 없는 태그들 : img, br, hr, meta, input
4. 태그는 중첩 가능하며, 종료태그는 나중에 작성한 태그 먼저 작성한다.
5. 가급적 모든 태그와 속성은 소문자로 작성한다 

## 속성의 특징

1. 태그와 속성, 속성과 속성은 공백으로 구분

```html (어떤 코드로 작성하는지 기재)
<a href="#"></a>
```

2. 여러개의 속성을 사용할 수 있다. 

```html
<img src="/" width="100"> - 이미지의 가로 길이 설정
```

3. 하나의 속성에는 값을 한개만 지정 가능하다. (예외 meta 가능)

```html
<img src="/" width="100,200">
<!-- 작성 불가 --> : 주석 (나만 볼 수 있음)
```

4. 속성값은 원래의 이름이 한글인 경우가 아니면 사용 불가능하다.

```html
<img src="/" width="삼백">
<!-- 작성 불가 -->
<meta name="keywords" content="영화, 한국영화, 외국영화">
<!-- 예외적인 경우 -->
```

## HTML 기본 문서 구조

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
```

- !DOCTYPE html : 현재 문서가 HTML5 언어로 작성된 웹 문서라는 뜻 
- html : 웹 문서의 시작과 끝
- head : 웹 문서의 정보
- body : 실제 웹 브라우저에 나타나는 내용

## head에 많이 쓰는 태그

1. title : 문서의 제목 => <title>넷플릭스</title>
2. meta : 문서의 속성

## meta 태그- 종료 태그 없음

```html
<meta charset="UTF-8"> : 한글때문에 무조건 명시 <!-- 문자 세트 지정-->
<meta name="viewport" content="width=device-width, initial-scale=1.0"> : 반응형 (화면 사이즈에 맞춰서 크기 조절) <!-- 모바일 기기-->
<meta http-equiv="X-UA-Compatible" content ="ie=edge"> : 익스플로어 엣지 브라우저때문에 적용
<!-- 인터넷 익스플로러 브라우저 -->

<!-- 검색 엔진 -->
<meta name="keywords" content="키워드1, 키워드2">
<meta name="description" content="문서 설명">
<meta name="author" content="문서 작성자">
```
=> 파일 만들고 ! 엔터하면 기본 구조 자동 완성
