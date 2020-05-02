//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
      author: "— Confucius"
    },
    {
      quote:
        "It does not matter how slowly you go as long as you do not stop",
      author: "– Confucius"
    },
    {
      quote:
        "Everything you’ve ever wanted is on the other side of fear. ",
      author: "— George Addair "
    },
    {
      quote: "Hardships often prepare ordinary people for an extraordinary destiny. ",
      author: "– C.S. Lewis"
    },
    {
      quote:
        "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ",
      author: "― Roy T. Bennett"
    },
    {
      quote:
        "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
      author: " ― Paulo Coelho"
    },
    {
      quote:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "– W. Clement Stone"
    },
    {
      quote:
        "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.",
      author: "– Wayne Dyer"
    },
    {
      quote:
        "Permanence, perseverance and persistence in spite of all obstacles,discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak. ",
      author: "– Thomas Carlyle"
    },
    {
      quote:
        "Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be.",
      author: "  – ZigZiglar"
    },
    {
      quote:
        "Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed.",
      author: "– Bob Riley"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
