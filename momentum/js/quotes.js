const quotes = [
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 떄가 온다.",
    author: "괴테",
  },
  {
    quote: "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
    author: "이소룡",
  },
  {
    quote: "때가 오면 모든 것이 분명해진다. 시간은 진리의 아버지이다.",
    author: "타블레",
  },
  {
    quote: "변명 중에서도 가장 어리석고 못난 변명은 \"시간이 없어서\"라는 변명이다.",
    author: "에디슨",
  },
  {
    quote: "선천적으로 현명한 사람은 없다. 시간이 모든 것을 완성한다.",
    author: "세르반테스",
  },
  {
    quote: "햇빛은 하나의 초점에 모아질 때만 불꽃을 피우는 것이다.",
    author: "벨",
  },
  {
    quote: "끝을 맺기를 처음과 같이 하면 실패가 없다.",
    author: "노자",
  },
  {
    quote: "내일에 아무런 도움이 되지 않는다면, 당신의 과거는 쫓아버려라.",
    author: "오슬러",
  },
  {
    quote: "용기 있는 자로 살아라. 운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라.",
    author: "키케로",
  },
  {
    quote: "인생에 뜻을 세우는 데 있어 늦은 떄라곤 없다.",
    author: "볼드윈",
  }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote  = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;