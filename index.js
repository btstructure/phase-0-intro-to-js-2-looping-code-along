function writeCards(names, event) {
    let thankYou = []
    for (let i = 0; i < names.length; i++) {
      thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return thankYou;
  }

  function countDown(down) {
    while (down > 0) {
      console.log(down);
      down -= 1;
    }
    console.log(down)
  }