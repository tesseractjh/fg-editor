# fg-editor
Flex &amp; Grid 웹 페이지에서 사용된 에디터 컴포넌트를 CDN으로 배포하기 위해 별도의 Repo로 분리하였습니다.

## CDN
```html
<script src="https://cdn.jsdelivr.net/gh/tesseractjh/fg-editor@main/dist/fg-editor.min.js"></script>
```

## 사용 방법
```html
<div data-mode="snippet" class="fg-editor css-flex">
  <code data-snippet="flex-start">
    .container {
      display: flex;
      justify-content: flex-start;
    }
  </code>
  <code data-snippet="center">
    .container {
      display: flex;
      justify-content: center;
    }
  </code>
  <code data-snippet="flex-end">
    .container {
      display: flex;
      justify-content: flex-end;
    }
  </code>
</div>
<script src="https://cdn.jsdelivr.net/gh/tesseractjh/fg-editor@main/dist/fg-editor.min.js"></script>
```
- 에디터가 될 태그에 `fg-editor` 클래스를 추가해야 합니다.
- `data-mode`에 `snippet`, `free`, `carousel` 중 하나를 입력해서 모드를 설정합니다.
- 에디터 태그 내부에 `<code>` 태그 하나를 추가하고, `<code>` 태그 내부에 초기 CSS 코드를 설정할 수 있습니다.
- `theme-grid` 클래스를 추가하면 grid 테마(#f6866a)로 에디터의 스타일을 변경할 수 있습니다.
- 부모 요소 중에 `on` 클래스를 포함한 클래스가 존재하면 다크 모드가 적용됩니다.

### snippet 모드
여러 개의 코드를 포함하는 모드입니다. radio 버튼으로 각 코드를 열람할 수 있고, 제한적으로 CSS와 HTML을 수정할 수 있습니다.

![image](https://user-images.githubusercontent.com/67459853/171649148-cb14a7f5-f89a-4d9f-bbaf-743a55370c35.png)

- `snippet` 모드는 여러 개의 `<code>` 태그를 가질 수 있습니다. 각각의 `<code>` 태그에 `data-snippet`으로 각 코드의 제목을 설정할 수 있습니다.
- `snippet` 모드의 각 `<code>` 태그에 `data-item`으로 초기 Flex / Grid Item의 개수를 설정할 수 있습니다. 기본값은 3 입니다.
- `css-flex` 또는 `css-grid` 클래스를 추가하면 CSS 편집시 Flex 또는 Grid 관련 CSS 속성만 표시됩니다.

### free 모드
하나의 초기 코드만 존재하는 모드입니다. CSS를 텍스트로 수정할 수 있고, HTML은 제한적으로 수정할 수 있습니다.

```html
<div data-mode="free" data-title="Flex Code" class="fg-editor">
  <code data-struct="[3][2[3]]">
    .container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .container1 {
      margin-bottom: 20px;
    }
    .container1 .item {
      height: 40px;
    }
    .container2 {
      flex-wrap: wrap;
      width: 300px;
      margin-bottom: 20px;
    }
    .item3 {
      flex: 1;
    }
  </code>
</div>
```
![image](https://user-images.githubusercontent.com/67459853/171651018-142d363e-72ff-4d42-a9aa-494aaa475c49.png)

- `data-title`로 코드의 제목을 설정할 수 있습니다.
- `<code>`태그에 `data-struct`로 초기 HTML 구조를 설정할 수 있습니다. 대괄호는 container를 의미하고, 숫자는 연속된 item의 개수를 의미합니다.
  `data-struct="[3]"`은 하나의 container에 item 3개가 들어가 있는 것을 의미합니다.
  
### carousel 모드
`snippet` 모드 처럼 여러 코드를 포함하나, 편집 방식은 `free` 모드와 동일하고, snippet간 이동을 radio 버튼 대신 캐러셀의 indicator로 조작할 수 있습니다.

```html
<div data-mode="carousel" data-title="Flex Code" class="fg-editor">
  <code data-struct="[3]">
    .container {
      display: flex;
      justify-content: flex-start;
    }
  </code>
  <code data-struct="[3]">
    .container {
      display: flex;
      justify-content: center;
    }
  </code>
  <code data-struct="[3]">
    .container {
      display: flex;
      justify-content: flex-end;
    }
  </code>
</div>
```
![image](https://user-images.githubusercontent.com/67459853/171652872-19c5471f-cfb5-4ec1-adf1-38b54fc74055.png)

- `snippet` 모드와는 다르게 `data-struct`로 HTML 구조를 나타냅니다. 또한 각 snippet별 제목이 따로 존재하지 않습니다. 
