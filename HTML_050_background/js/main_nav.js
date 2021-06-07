document.addEventListener("DOMContentLoaded", () => {
  // nav와 section을 별도의 변수로 만들기
  const nav = document.querySelector("nav#main_nav");
  const conts = document.querySelector("section#contents");

  // 이벤트 핸들러 함수 선언
  const navClick = (e) => {
    let tagName = e.target.tagName;
    /*
    class="art1"인 li tag를 클릭하면
    클래스 이름의 문자열 art1과 #을 결합하여
    #art1 문자열을 만들고 

    querySelector()로 art1 id가 설정된 article box를
    selector하고
    
    article box의 크기, 좌표 정보를 getter하고 
    그 정보에서 top의 좌표만 추출

    window.scrollBy() 함수에
        top은 article box의 top으로 설정
        left는 화면 왼쪽 끝인 0으로 설정
        smooth 속성을 부여하여
        부드럽게 화면이 넘어가도록 설정
    */
    if (tagName === "LI") {
      // art1, art2 등등
      let className = e.target.className;
      // className이 art1이면 #art1을 찾아서 선택
      let art = document.querySelector("#" + className); // #으로 문자열연결

      // art 객체(DOM 객체)의 현재 위치, 모양값을
      // getter 해달라
      let bound = art.getBoundingClientRect();
      // art 객체(box)의 화면의 위에서부터 좌표값
      let artTop = bound.top;

      window.scrollBy({
        top: artTop,
        left: 0,

        // 메뉴를 클릭하면 화면이넘어갈때 스무스하게 넘어감
        behavior: "smooth",
      });
    }
  };
  // nav에 click event 설정
  nav.addEventListener("click", navClick);

  /*
  scroll event는 화면이 스크롤 되는 동안에
  엄청나게 많은 event가 발생한다
  이 event 핸들러에서 화면에 무언가 그리는
  코드를 작성하게 되면 
  Browser, System에 막대한 자원을 소모한다
  이러한 불편함을 없애기 위해
  임의의 flag 변수(ticking)를 하나 만들고
  처음 이벤트가 시작되어 화면에 그리는 코드가 실행될 때
  flag를 세팅하여 다시 코드가 중복 실행되는 것을 방지
  */
  let ticking = false;
  const scrollTop_Nav_tick = (e) => {
    if (!ticking) {
      ticking = true;

      // 화면에 fix된 nav box의 하단 라인 좌표를 조회
      let nav_bound = nav.getBoundingClientRect();
      let nav_bottom = nav_bound.bottom;

      // 실제로 article의 element를 추출하기

      // 왼쪽에서부터 0번째 하단선에 걸친 nav가 누구인지
      // nav box의 제일 하단 라인에 걸려있는
      // box tag가 누구인가 getter하여 art에 담기
      let art = document.elementFromPoint(0, nav_bottom);

      // 현재 선택된 tag(ele에 담겨 있는 tag)에서
      // id값을 추출하여(art1, art2)
      // li 중에 클래스가 id값과 같은 tag를 선택
      // li.art1 와 같은 selector
      let li = nav.querySelector("ul li." + art.id);
      // 그리고 선택된 tag에 active클래스를 추가하라

      // 혹시 active가 설정된 li tag가 있으면
      // active 클래스를 제거하고
      let activs = nav.querySelectorAll("ul li.active");
      for (let i = 0; i < actives.length; i++) {
        actives[i].classList.remove("active");
      }
      // 현재 보고있는 article과 같은 nav의 li에
      // active 클래스를 지정
      li.classList.add("active");

      ticking = false;
    }
  };
  // 현재 보고 있는 화면이 스크롤되면
  document.addEventListener("scroll", scrollTop_Nav_tick);
});
